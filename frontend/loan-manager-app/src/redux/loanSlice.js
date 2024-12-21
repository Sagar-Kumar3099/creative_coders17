import { createSlice } from '@reduxjs/toolkit';

const loanSlice = createSlice({
  name: 'loan',
  initialState: {
    applications: [
      { id: 1, name: 'John Doe', amount: 5000, status: 'Pending' },
      { id: 2, name: 'Jane Smith', amount: 10000, status: 'Pending' },
    ],
    loanDetails: null,
  },
  reducers: {
    setLoanDetails: (state, action) => {
      state.loanDetails = action.payload;
    },
    approveLoan: (state, action) => {
      const loan = state.applications.find((loan) => loan.id === action.payload);
      if (loan) loan.status = 'Approved';
    },
    rejectLoan: (state, action) => {
      const loan = state.applications.find((loan) => loan.id === action.payload);
      if (loan) loan.status = 'Rejected';
    },
    deleteLoan: (state, action) => {
      state.applications = state.applications.filter(
        (loan) => loan.id !== action.payload
      );
    },
  },
});

export const { setLoanDetails, approveLoan, rejectLoan, deleteLoan } = loanSlice.actions;
export default loanSlice.reducer;