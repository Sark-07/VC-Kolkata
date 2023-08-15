import React, {useState} from 'react';
import {GiAngryEyes} from 'react-icons/gi'
import './StudentLogin.css/studentLogin.css'
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";


const StudentLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [validEmail, setValidEmail] = useState(false);


  return (
    <div className='sign-in'>
      <div className='left'>
        <div className='logo'>
          <Logo/>
          <h1>Vivekananda College</h1>
        </div>
        <div className='center'>
          <h1 className='welcome-text'>
            Student Login
          </h1>

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
              <label htmlFor='password'>Password</label>
              <input
                className='sign-in-password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <GiAngryEyes
                onClick={() => setShowPassword(!showPassword)}
                className='password-eye'
                style={password && { display: 'block' }}
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
              <button className='login-btn'>Sign In</button>
          </form>
        </div>
      </div>
      <div className='right'>
      </div>
    </div>
  );
};

export default StudentLogin;
