import React, { useState } from 'react';
import './Register.css';
import { useRegisterUserMutation } from '../../api/endpoints/authApiSlice';
import { useSelector } from 'react-redux';

const Register = () => {
  const [registerUser, { isLoading, isError, error }] =
    useRegisterUserMutation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirm: '',
  });
  const token = useSelector((state) => state.user.token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (token) {
      console.log('User is already logged in.', token);
      return;
    }

    const { email, password, password_confirm } = formData;

    if (!email || !password || !password_confirm) {
      console.log('Please fill out all fields');
      return;
    }

    if (password !== password_confirm) {
      console.log('Passwords do not match');
      return;
    }

    try {
      await registerUser(formData).unwrap();
      console.log('User is registered:', formData);
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
