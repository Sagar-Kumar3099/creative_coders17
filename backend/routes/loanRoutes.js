// //Routes related to loan application


const express = require('express');
const { applyForLoan, getLoanStatus, getRepaymentSchedule } = require('../controllers/loanController');

const router = express.Router();

// Loan Application Routes
router.post('/apply', applyForLoan); // Apply for a loan
router.get('/status/:userId', getLoanStatus); // Get loan status by userId
router.get('/repayment/:userId', getRepaymentSchedule); // Get repayment schedule by userId

module.exports = router;
