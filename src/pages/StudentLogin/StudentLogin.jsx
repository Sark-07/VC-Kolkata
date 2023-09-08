import React, { useState, useEffect } from 'react';
import './StudentLogin.css/studentLogin.css';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha} from 'react-simple-captcha';
import { validateEmail } from '../../utils/validateEmail';
import toast from 'react-hot-toast'


const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [captcha, setCaptcha] = useState('')
  const [validEmail, setValidEmail] = useState(false);
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const url = 'http://localhost:3000/VC/api/auth/signin';
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (validateEmail(email) == null) {
        setValidEmail(true);
      }else if (validateCaptcha(captcha) == false) {
        toast.error('Invalid Captcha.')

      }
       else {
        const payload = {
          email: email,
          DOB: dob,
        };

        console.log(payload);
        
        // const { data } = await axios.post(url, payload);
        // if (data.success) {
        //   toast.success(data.message);
        //   // setauth({...auth, user: data.user, token: data.token})
        //   // localStorage.setItem('auth', JSON.stringify({user: data.user, token: data.token}))
        //   // localStorage.setItem('token', data.token)
        // toast.success('User Signed In.')
        //   // console.log(data.user, data.token, auth);
        //   setTimeout(() => {
        //     //    login({token: data.token, user: data.user}, '/')
        //   }, 2000);
        // }
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
