import { createSlice } from '@reduxjs/toolkit';

const loanSlice = createSlice({
  name: 'loan',
  initialState: {
    loanDetails: null,
  },
  reducers: {
    setLoanDetails(state, action) {
      state.loanDetails = action.payload;
    },
  },
});

export const { setLoanDetails } = loanSlice.actions;
export default loanSlice.reducer;
