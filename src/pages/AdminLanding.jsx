import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminLanding.css';

const AdminLanding = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="admin-landing-container">
      <div className="admin-content">
        <h1>Admin Portal</h1>
        <p>
          Welcome to your AI-powered hiring command center. 
          Register your organization or access your existing account to begin.
        </p>

        <div className="admin-actions">
          <Link 
            to="/admin/register" 
            className="admin-button register"
            onMouseEnter={() => setHoveredButton('register')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span>Register Organization</span>
            <p>Create a new organization account</p>
          </Link>
          
          <Link 
            to="/admin/login" 
            className="admin-button login"
            onMouseEnter={() => setHoveredButton('login')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span>Admin Login</span>
            <p>Access your existing account</p>
          </Link>
        </div>

        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AdminLanding; 