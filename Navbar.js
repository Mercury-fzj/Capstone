// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isRegistered, userEmail, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">CampusTrade</Link>
      </div>
      <div className="navbar-links">
        {isRegistered && (
          <>
            <Link to="/">Home</Link>
            <Link to="/post">Post</Link>
            <span className="navbar-user">{userEmail}</span>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


