// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  // State to manage if the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {/* Navbar is shown on all pages */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      
      {/* Routes define which page component to show based on the URL */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/login" 
          element={<LoginPage onLoginSuccess={handleLogin} />} 
        />
      </Routes>
    </div>
  );
}

export default App;