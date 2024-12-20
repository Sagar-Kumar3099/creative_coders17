import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About MyLoan</h3>
          <p>We provide the best loan options for individuals and businesses.</p>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Loan Types</a></li>
            <li><a href="#">Apply Now</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@myloan.com</p>
          <p>Phone: 7365818084</p>
          <p>Address: 123 Loan St, Kolkata, India</p>
        </div>

      
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="footer-bottom">
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
        <p>&copy; 2024 MyLoan ❤ with creative-Coders.</p>
      </div>
    </footer>
  );
};

export default Footer;
