import React from "react";
import "../styles/LoanOptions.css";

const LoanOptions = () => {
  return (
    <section id="loans" className="loan-options">
      <h2>Our Loan Services</h2>
      <div className="loan-cards">
        <div className="card">
          <h3>Personal Loan</h3>
          <p>Flexible repayment options for your personal needs.</p>
          <button className="apply-now-btn">Apply Now</button>
        </div>
        <div className="card">
          <h3>Business Loan</h3>
          <p>Empower your business with easy and quick loans.</p>
          <button className="apply-now-btn">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default LoanOptions;
