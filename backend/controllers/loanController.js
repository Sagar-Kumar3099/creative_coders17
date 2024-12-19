//Handle Loan Application Logic

import Loan from '../models/loan.js';
import { sendEmail } from '../utils/sendEmail.js';

const updateLoanStatus = async (req, res) => {
    const { loanId, status } = req.body;
    
    try {
        const loan = await Loan.findById(loanId);
        
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        
        loan.status = status;
        await loan.save();

        // Send email notification
        const user = await User.findById(loan.userId);
        const subject = `Your Loan Status has been updated to: ${status}`;
        const text = `Dear ${user.name},\n\nYour loan application with ID ${loanId} has been updated to: ${status}.`;

        sendEmail(user.email, subject, text);
        
        res.status(200).json(loan);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getLoans = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;  // Default to page 1 and limit 10
    const skip = (page - 1) * limit;

    try {
        const loans = await Loan.find({ userId: req.user.id })
            .skip(skip)
            .limit(parseInt(limit));

        const totalLoans = await Loan.countDocuments({ userId: req.user.id });
        const totalPages = Math.ceil(totalLoans / limit);

        res.json({
            loans,
            pagination: {
                totalLoans,
                totalPages,
                currentPage: page,
                pageSize: limit,
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
