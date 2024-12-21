import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoanDetails.css";

const LoanDetails = () => {
  const navigate = useNavigate();
  const [loans, setLoans] = useState([
    {
      id: 1,
      name: "Home Loan",
      amount: 500000,
      interestRate: 5,
      tenure: 240,
      status: "Available",
    },
    {
      id: 2,
      name: "Car Loan",
      amount: 200000,
      interestRate: 7,
      tenure: 60,
      status: "Available",
    },
    {
      id: 3,
      name: "Personal Loan",
      amount: 100000,
      interestRate: 10,
      tenure: 36,
      status: "Available",
    },
  ]);

  const [appliedLoan, setAppliedLoan] = useState(null);

  // Handle loan application
  const applyForLoan = (loan) => {
    const updatedLoans = loans.map((l) =>
      l.id === loan.id ? { ...l, status: "Pending" } : l
    );
    setLoans(updatedLoans);
    setAppliedLoan(loan);
  };

  return (
    <div className="loan-details-container">
      <h2>Available Loans</h2>
      {loans.length === 0 ? (
        <p>No loans available.</p>
      ) : (
        <table className="loan-details-table">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Loan Type</th>
              <th>Amount</th>
              <th>Interest Rate</th>
              <th>Tenure (Months)</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>{loan.name}</td>
                <td>{loan.amount}</td>
                <td>{loan.interestRate}%</td>
                <td>{loan.tenure}</td>
                <td>{loan.status}</td>
                <td>
                  {loan.status === "Available" && (
                    <button onClick={() => applyForLoan(loan)}>Apply</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {appliedLoan && (
        <div className="loan-application-status">
          <h3>Application Status</h3>
          <p>You have applied for the {appliedLoan.name}.</p>
          <p>Status: <strong>{appliedLoan.status}</strong></p>
        </div>
      )}
    </div>
  );
};

export default LoanDetails;
