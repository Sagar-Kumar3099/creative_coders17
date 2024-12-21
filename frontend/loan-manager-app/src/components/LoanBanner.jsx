import React from 'react';
import '../styles/LoanBanner.css';

import loanfamily from '../assets/loanfamily.png';
const handleApplyNow = () => {
  navigate('/LoanOptions'); // Navigate to loan form
};

const LoanBanner = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/7365818084?text=Hi! I need help with personal loans.', '_blank');
  };

  return (
    <div className="loan-banner">
      <div className="left-section">
        <h1>Hassle-free Online Personal Loan for all your Financial Needs!</h1>
        <ul>
          <li>Avail loan up to Rs.5 lakhs*</li>
          <li>Instant approval</li>
          <li>100% paperless process</li>
          <li>Flexible repayment tenure</li>
        </ul>
        <button  id="apply-button" onClick={() => handleScroll('personal-loan')}>Apply Now</button>
      </div>
      <div className="right-section">
        <img src={loanfamily} alt="Loan Process" />
      </div>
      <div className="quick-actions">
        <button
          className="quick-button whatsapp-button"
          onClick={handleWhatsAppClick}
        >
          w📲
        </button>
      </div>
    </div>
  );
};

export default LoanBanner;
