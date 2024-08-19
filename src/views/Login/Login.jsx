import React, { useState } from 'react';
import './Login.css';
import { useLoginUserMutation } from '../../api/endpoints/authApiSlice';
import { useSelector } from 'react-redux';

const Login = () => {
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const token = useSelector((state) => state.user.token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (token) {
      console.log('User is already logged in.', token);
      return;
    }

    try {
      await loginUser(formData).unwrap();
      console.log('User login successfully:');
    } catch (err) {
      console.error('Failed to login:', formData, err);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <div className="title">
          <p>Sign in</p>
        </div>
        <div className="input-fields">
          <input
            className="input-field"
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="input-field"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="submit-btn-holder">
          <input
            className="submit-btn"
            type="button"
            value="Login"
            onClick={handleLogin}
          />
        </div>
        <div className="socials">
          <div>
            <p>or Sign in with</p>
          </div>
          <div className="icons-holder">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-apple"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
