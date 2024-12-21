//Handle Loan Application Logic

const Loan = require('../models/loanModel');

// Apply for Loan
const applyForLoan = async (req, res) => {
    try {
        const loan = new Loan(req.body);
        const savedLoan = await loan.save();
        res.status(201).json({ message: 'Loan application submitted successfully', loan: savedLoan });
    } catch (error) {
        res.status(500).json({ message: 'Error applying for loan', error });
    }
};

// Get Loan Status
const getLoanStatus = async (req, res) => {
    try {
        const loan = await Loan.findOne({ userId: req.params.userId });
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.status(200).json(loan);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching loan status', error });
    }
};

// Get Repayment Schedule
const getRepaymentSchedule = async (req, res) => {
    try {
        const loan = await Loan.findOne({ userId: req.params.userId });
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.status(200).json(loan.repaymentSchedule);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching repayment schedule', error });
    }
};

module.exports = { applyForLoan, getLoanStatus, getRepaymentSchedule };

