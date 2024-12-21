import React, { useState } from "react";
import "../styles/LoanCalculator.css";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [loanTenure, setLoanTenure] = useState(24); 
  const interestRate = 14; // Annual interest rate in percentage

  // EMI Calculation Function
  const calculateEMI = (principal, tenure, rate) => {
    const monthlyRate = rate / 12 / 100; // Convert annual rate to monthly decimal
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1)
    );
  };

  const emi = calculateEMI(loanAmount, loanTenure, interestRate).toFixed(2);

  return (
    
    <div className="loan-calculator">
      
      <h2>Preferred Loan Amount</h2>
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(Number(e.target.value))}
        min={10000}
        max={1000000}
      />

      <h3>Your Loan Tenure (in months)</h3>
      <div className="slider-container">
        <input
          type="range"
          min={3}
          max={36}
          step={1}
          value={loanTenure}
          onChange={(e) => setLoanTenure(Number(e.target.value))}/>

        <div className="tenure-label">{loanTenure}</div>
      </div>

      <div className="emi-display">
        <h3>Estimated Equated Monthly Installments (EMI):</h3>
        <div className="emi-value">₹ {emi}</div>
        <p>Interest Amount (2.25% p.m)</p>
        <p>At Annualised Interest Rate (14% p.a)</p>
      </div>

      <button className="apply-btn">Apply For Personal Loan</button>
    </div>
  );
};

export default LoanCalculator;
