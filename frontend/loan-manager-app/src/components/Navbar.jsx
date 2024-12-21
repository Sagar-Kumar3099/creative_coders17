import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle smooth scrolling (for homepage sections)
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        {/* Clicking on the logo navigates to the homepage */}
        my<span>loan</span>
      </div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a onClick={() => navigate('/')}>Home</a>
        <a onClick={() => handleScroll('personal-loan')}>Loan</a>
        <a onClick={() => handleScroll('eligibility')}>Eligibility</a>
        <a onClick={() => handleScroll('emi-calculator')}>EMI Calculator</a>
        <a onClick={() => handleScroll('about')}>About</a>
        <a onClick={() => handleScroll('contact')}>Contact</a>
        <a onClick={() => handleScroll('FAQ')}>FAQ</a>
      </div>
      <div className="auth-buttons">
        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
        <button className="signup-btn" onClick={() => navigate('/signup')}>Signup</button>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
