import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    organizationName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the registration logic
    // For now, we'll just redirect to the admin dashboard
    navigate('/admin/dashboard');
  };

  return (
    <div className="auth-container">
      <Link to="/admin" className="back-button">
        ← Back
      </Link>
      <div className="auth-content">
        <h2>Register Your Organization</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="organizationName"
            placeholder="Organization Name"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        <div className="auth-links">
          <p>Already have an account? <Link to="/admin/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;