import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      console.log('Please fill out all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:3003/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Server response:', data);
      } else {
        const errorData = await response.json();
        console.log('Error response:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
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
