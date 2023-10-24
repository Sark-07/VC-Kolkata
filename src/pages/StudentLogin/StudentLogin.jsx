import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './StudentLogin.css/studentLogin.css';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha} from 'react-simple-captcha';
import { validateEmail } from '../../utils/validateEmail';
import {useAuth} from '../../contexts/AuthContext'
import axios from 'axios';
import toast from 'react-hot-toast'


const StudentLogin = () => {
  const {isAuthenticated, login} = useAuth()
  console.log(useAuth());
  if (isAuthenticated()){

    return <Navigate to={'/'}/>

   }
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [captcha, setCaptcha] = useState('')
  const [validEmail, setValidEmail] = useState(false);


  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const url = 'http://localhost/vc/StudentLogin.php';
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (validateEmail(email) === false) {
        setValidEmail(true);
        setTimeout(() => {
          setValidEmail(false);
        }, 3000);
      }else if (validateCaptcha(captcha) == false) {
        toast.error('Invalid Captcha.')

      }
       else {
        const payload = {
          email: email,
          DOB: dob.split("-").reverse().join("-"),
        };

        console.log(payload);
        
        const { data } = await axios.post(url, payload);
        console.log(data);
        if (data.success) {
          toast.success(data.message);
          setTimeout(() => {
            login({token: data.data.token, email: data.email}, '/')
            
          }, 1000);
        }else{
          
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='sign-in'>
      <div className='left'>
        <div className='logo'>
          <Logo />
          <h1>Vivekananda College</h1>
        </div>
        <div className='center'>
          <h1 className='welcome-text'>Student Login</h1>

          <form action='' onSubmit={(e) => handleSubmit(e)}>
            <div className='email'>
              <label htmlFor='Email' style={{ color: validEmail && 'crimson' }}>
                {validEmail ? 'Invalid Email Format' : 'Email'}
              </label>
              <input
                type='email'
                className='sign-in-email'
                placeholder='Enter your email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='DOB'>
              <label htmlFor='DOB'>DOB</label>
              <input
                className='sign-in-DOB'
                type='date'
                placeholder='Enter your DOB'
                required
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className='captcha'>
              <label htmlFor='captcha'>Captcha</label>
              <input
                className='sign-in-captcha'
                type='text'
                placeholder='Enter captcha'
                required
                onChange={(e) => setCaptcha(e.target.value)}
                
              />
            </div>
            <div className='remember-forget-DOB'>
              <div className='remember-me'>
                <input type='checkbox' name='' id='' />
                <label htmlFor='remember me'>Remember me</label>
              </div>
            </div>
            <LoadCanvasTemplate />
            <button className='login-btn'>Sign In</button>
          </form>
        </div>
      </div>
      <div className='right'></div>
    </div>
  );
};

export default StudentLogin;
