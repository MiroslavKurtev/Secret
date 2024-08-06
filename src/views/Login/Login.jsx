import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='container'>
      <div className='login'>
        <div className='title'>
          <p>Sign in</p>
        </div>
        <div className='input-fields'>
          <input className='input-field' type='text' placeholder='Email' />
          <input className='input-field' type='text' placeholder='Password' />
        </div>
        <div className='sumbit-btn-holder'>
          <input className='sumbit-btn' type='submit' value='Login' />
        </div>
        <div className='socials'>
          <div>
            <p>or Sign in with</p>
          </div>
          <div className='icons-holder'>
            <i class='fa-brands fa-facebook-f'></i>
            <i class='fa-brands fa-x-twitter'></i>
            <i class='fa-brands fa-google'></i>
            <i class='fa-brands fa-apple'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
