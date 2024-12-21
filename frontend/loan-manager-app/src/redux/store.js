import { configureStore } from "@reduxjs/toolkit";
import loanReducer from "./loanSlice"; // Import loanReducer

const store = configureStore({
  reducer: {
    loans: loanReducer, // Add loanReducer under "loans"
  },
});

export default store;
