import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../actions/authActions'; 
import './style.css';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    user_type: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp(formData)); 
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>User Type</label>
          <select
            name="user_type"
            value={formData.user_type}
            onChange={handleChange}
          >
            <option value="">Select User Type</option>
            <option value="researcher">Researcher</option>
            <option value="investor">Investor</option>
            <option value="institution_staff">Institution Staff</option>
            <option value="service_provider">Service Provider</option>
          </select>
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm; 
