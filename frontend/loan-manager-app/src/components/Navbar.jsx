import React, { useState } from 'react';
import '../styles/Navbar.css';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close the menu after clicking (if it's open)
  };

  return (
    <nav className="navbar">
      <div className="logo">
        my<span>loan</span>
      </div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a onClick={() =>handleScroll('home')}>Home</a>
        <a onClick={() =>handleScroll('personal-loan')}>Loan</a>
        <a onClick={() => handleScroll('eligibility')}>Eligibility</a>
        <a onClick={() =>  handleScroll('emi-calculator')}>EMI Calculator</a>
        <a onClick={() => handleScroll('about')}>About</a>
        <a onClick={() =>handleScroll('contact')}>Contact</a>
        <a onClick={() => handleScroll('FAQ')}>FAQ</a>
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
