import React from 'react';
import '../styles/LoanOptions.css'; 

const LoanOptions = () => {
  return (
    <section id="loans" className="loan-options">
      <h2>Our Loan Services</h2>
      <div className="loan-cards">
        <div className="card">
          <h3>Personal Loan</h3>
          <p>Flexible repayment options for your personal needs.</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <h3>Business Loan</h3>
          <p>Empower your business with easy and quick loans.</p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default LoanOptions;
