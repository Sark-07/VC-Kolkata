import React, { useState, useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import toast from 'react-hot-toast'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { validateEmail } from '../../utils/validateEmail';
import './TeacherLogin.css/teacherLogin.css';
import axios from 'axios';

const TeacherLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const url = 'http://localhost:3000/VC/api/auth/signin';
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (validateEmail(email) == null) {
        setValidEmail(true);
      } else {
        const payload = {
          email: email,
          password: password,
        };

        const { data } = await axios.post(url, payload);
        if (data.success) {
          toast.success(data.message);
          // setauth({...auth, user: data.user, token: data.token})
          // localStorage.setItem('auth', JSON.stringify({user: data.user, token: data.token}))
          // localStorage.setItem('token', data.token)
          // console.log(data.user, data.token, auth);
          setTimeout(() => {
            //    login({token: data.token, user: data.user}, '/')
          }, 2000);
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
          <h1 className='welcome-text'>Teacher Login</h1>

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
            <div className='password'>
              <label htmlFor='password'>password</label>
              <input
                className='sign-in-password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiOutlineEyeInvisible
                onClick={() => setShowPassword(!showPassword)}
                className='password-eye'
                style={password && !showPassword && { display: 'block' }}
              />
              <AiOutlineEye
                onClick={() => setShowPassword(!showPassword)}
                className='password-eye'
                style={password && showPassword && { display: 'block' }}
              />
            </div>
            <div className='captcha'>
              <label htmlFor='captcha'>Captcha</label>
              <input
                className='sign-in-captcha'
                type='text'
                placeholder='Enter captcha'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='remember-forget-password'>
              <div className='remember-me'>
                <input type='checkbox' name='' id='' />
                <label htmlFor='remember me'>Remember me</label>
              </div>
              <span>
                <a href='#'>Forget Password?</a>
              </span>
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

export default TeacherLogin;
