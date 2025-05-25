import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;