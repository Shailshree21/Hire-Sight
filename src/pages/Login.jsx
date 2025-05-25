import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    // Here you would typically handle the login logic
    // For now, we'll just redirect to the admin dashboard
    navigate('/admin/dashboard');
  };

  return (
    <div className="auth-container">
      <Link to="/admin" className="back-button">
        ← Back
      </Link>
      <div className="auth-content">
        <h2>Admin Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="auth-links">
          <p>Don't have an account? <Link to="/admin/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;