import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="landing-container">
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <h1>HireSight</h1>
        <p>
          Transform your hiring process with AI-powered assessments and 
          intelligent candidate evaluation
        </p>
        
        <div className="portal-options">
          <Link 
            to="/admin" 
            className="portal-card admin"
            onMouseEnter={() => setHoveredCard('admin')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="portal-content">
              <h2>Admin Portal</h2>
              <p>Streamline your recruitment process with AI-driven insights</p>
              <span className="portal-arrow">→</span>
            </div>
          </Link>

          <Link 
            to="/candidate" 
            className="portal-card candidate"
            onMouseEnter={() => setHoveredCard('candidate')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="portal-content">
              <h2>Candidate Portal</h2>
              <p>Experience next-generation assessment technology</p>
              <span className="portal-arrow">→</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;