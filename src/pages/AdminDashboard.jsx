import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaClipboardList, FaCog, FaBell, FaUser, FaSignOutAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <>
            <div className="overview-grid">
              <div className="stat-card">
                <h3>Total Candidates</h3>
                <div className="stat-number">1,234</div>
                <span className="stat-change positive">+12% from last month</span>
              </div>
              <div className="stat-card">
                <h3>Active Assessments</h3>
                <div className="stat-number">45</div>
                <span className="stat-change positive">+5% from last week</span>
              </div>
              <div className="stat-card">
                <h3>Completed Interviews</h3>
                <div className="stat-number">789</div>
                <span className="stat-change negative">-2% from last month</span>
              </div>
              <div className="stat-card">
                <h3>Success Rate</h3>
                <div className="stat-number">85%</div>
                <span className="stat-change positive">+3% from last month</span>
              </div>
            </div>

            <div className="candidates-section">
              <h2>Recent Candidates</h2>
              {/* Add candidate list component here */}
            </div>

            <div className="assessments-section">
              <h2>Upcoming Assessments</h2>
              {/* Add assessments list component here */}
            </div>
          </>
        );

      case 'candidates':
        return (
          <div className="candidates-section">
            <h2>Manage Candidates</h2>
            {/* Add candidate management component here */}
          </div>
        );

      case 'assessments':
        return (
          <div className="assessments-section">
            <h2>Manage Assessments</h2>
            {/* Add assessment management component here */}
          </div>
        );

      case 'settings':
        return (
          <div className="settings-section">
            <h2>Settings</h2>
            {/* Add settings component here */}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h2>HireSight</h2>
          <button className="collapse-btn" onClick={toggleSidebar}>
            {sidebarCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveSection('overview')}
          >
            <FaUsers className="icon" />
            {!sidebarCollapsed && 'Overview'}
          </button>
          <button
            className={`nav-item ${activeSection === 'candidates' ? 'active' : ''}`}
            onClick={() => setActiveSection('candidates')}
          >
            <FaUsers className="icon" />
            {!sidebarCollapsed && 'Candidates'}
          </button>
          <button
            className={`nav-item ${activeSection === 'assessments' ? 'active' : ''}`}
            onClick={() => setActiveSection('assessments')}
          >
            <FaClipboardList className="icon" />
            {!sidebarCollapsed && 'Assessments'}
          </button>
          <button
            className={`nav-item ${activeSection === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveSection('settings')}
          >
            <FaCog className="icon" />
            {!sidebarCollapsed && 'Settings'}
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt className="icon" />
            {!sidebarCollapsed && 'Logout'}
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="header-actions">
            <button className="notification-btn">
              <FaBell />
              <span className="notification-badge">3</span>
            </button>
            <div className="user-profile">
              <FaUser className="user-avatar" />
              <span className="user-name">Admin User</span>
            </div>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard; 