// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend API
    console.log('Logging in with:', email, password);
    
    // If login is successful:
    onLoginSuccess(); // Update the state in App.js
    navigate('/');    // Redirect to the homepage
  };

  return (
    <div className="login-page-container">
      <div className="login-box">
        <h2>Welcome to RecipeHub</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@gmail.com"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;