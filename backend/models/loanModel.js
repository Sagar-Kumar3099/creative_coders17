//define loan schema 

const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    personalDetails: {
        name: { type: String, required: true },
        email: { type: String, required: true },
    },
    financialDetails: {
        income: { type: Number, required: true },
        loanAmount: { type: Number, required: true },
    },
    status: { type: String, default: 'Submitted' }, // Status: Submitted, Under Review, Approved, Denied
    repaymentSchedule: [
        {
            date: { type: Date },
            amount: { type: Number },
            status: { type: String, default: 'Pending' }, // Pending, Paid
        },
    ],
}, { timestamps: true });

module.exports = mongoose.model('Loan', loanSchema);
