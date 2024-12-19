import React, { useState } from 'react';
import '../styles/Navbar.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">my<span>loan</span></div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#personal-loan">Personal Loan</a>
        <a href="#business-loan">Business Loan</a>
        <a href="">Eligibility</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
