import React from "react";
import { useSelector } from "react-redux";

const LoanDetails = () => {
  const loans = useSelector((state) => state.loans); // Accessing the loans from Redux state

  return (
    <div className="loan-details-container">
      <h2>Loan Details</h2>
      {loans.length === 0 ? (
        <p>No loans available.</p>
      ) : (
        <table className="loan-details-table">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Borrower Name</th>
              <th>Amount</th>
              <th>Interest Rate</th>
              <th>Tenure</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, index) => (
              <tr key={index}>
                <td>{loan.id}</td>
                <td>{loan.name}</td>
                <td>{loan.amount}</td>
                <td>{loan.interestRate}%</td>
                <td>{loan.tenure} months</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LoanDetails;
