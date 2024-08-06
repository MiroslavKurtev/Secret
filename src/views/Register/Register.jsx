import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className='container'>
      <div className='register'>
        <div className='title'>
          <p>Sign up</p>
        </div>
        <div className='input-fields'>
          <input className='input-field' type='text' placeholder='Email' />
          <input className='input-field' type='text' placeholder='Password' />
          <input
            className='input-field'
            type='text'
            placeholder='Confirm password'
          />
        </div>
        <div className='sumbit-btn-holder'>
          <input className='sumbit-btn' type='submit' value='Register' />
        </div>
        <div className='socials'>
          <div>
            <p>or Sign up with</p>
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

export default Register;
