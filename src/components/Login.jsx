import React from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';

const Login = ({
  handleSubmit,
  studentHandleSubmit,
  validEmail,
  setDob,
  baseUrl,
  password,
  setCaptcha,
  setEmail,
  setPassword,
  setShowPassword,
  LoadCanvasTemplate,
  showPassword,
}) => {
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
            {baseUrl == 'teacher-login' ? (
              <div className='password'>
                <label htmlFor='password'>Password</label>
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
            ) : (
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
            )}

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
            {/* <div className='remember-forget-password'>
              <div className='remember-me'>
                <input type='checkbox' name='' id='' />
                <label htmlFor='remember me'>Remember me</label>
              </div>
              <span>
                <a href='#'>Forgot Password?</a>
              </span>
            </div> */}
            <LoadCanvasTemplate />
            <button className='login-btn'>Sign In</button>
          </form>
        </div>
      </div>
      <div className='right'></div>
    </div>
  );
};

export default Login;
