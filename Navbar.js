// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-logo">RecipeHub</Link>
        <div className="nav-search">
          {/* You can add a search icon and input here */}
        </div>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <>
            {/* You can add a profile icon/link here */}
            <button onClick={onLogout} className="nav-button-outline">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-button">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;