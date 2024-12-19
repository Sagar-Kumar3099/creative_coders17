//define loan schema 
import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    loanAmount: { type: Number, required: true },
    loanType: { type: String, required: true },  // e.g., "Personal", "Mortgage"
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
    repaymentSchedule: [{
      date: { type: Date, required: true },
      amount: { type: Number, required: true },
      status: { type: String, enum: ['Paid', 'Pending', 'Overdue'], default: 'Pending' },
    }],
    applicationDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Loan = mongoose.model('Loan', loanSchema);

export { Loan };
