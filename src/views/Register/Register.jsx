import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirm: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    const { email, password, password_confirm } = formData;

    if (password !== password_confirm) {
      console.log('Passwords do not match');
      return;
    }

    if (!email || !password || !password_confirm) {
      console.log('Please fill out all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:3003/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, password_confirm }),
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
      <div className="register">
        <div className="title">
          <p>Sign up</p>
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
          <input
            className="input-field"
            type="password"
            name="password_confirm"
            placeholder="Confirm password"
            value={formData.password_confirm}
            onChange={handleChange}
          />
        </div>
        <div className="submit-btn-holder">
          <input
            className="submit-btn"
            type="button"
            value="Register"
            onClick={handleRegister}
          />
        </div>
        <div className="socials">
          <div>
            <p>or Sign up with</p>
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

export default Register;
