import React from 'react';
import '../styles/admin.css';

import { useSelector, useDispatch } from 'react-redux';
import { approveLoan, rejectLoan, deleteLoan } from '../redux/loanSlice';

const AdminPage = () => {
  const dispatch = useDispatch();
  const loanApplications = useSelector((state) => state.loan.applications);

  const handleApprove = (id) => dispatch(approveLoan(id));
  const handleReject = (id) => dispatch(rejectLoan(id));
  const handleDelete = (id) => dispatch(deleteLoan(id));

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      {loanApplications.length === 0 ? (
        <p>No loan applications found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loanApplications.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>{loan.name}</td>
                <td>{loan.amount}</td>
                <td>{loan.status}</td>
                <td>
                  <button onClick={() => handleApprove(loan.id)}>Approve</button>
                  <button onClick={() => handleReject(loan.id)}>Reject</button>
                  <button onClick={() => handleDelete(loan.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPage;