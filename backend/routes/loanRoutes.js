// //Routes related to loan application

// import express from 'express';
// import {Loan} from '../models/loan.js';
// import {authMiddleware} from '../middleware/authMiddleware.js';
// const router = express.Router();
// // Create a new loan application
// router.post('/', authMiddleware, async (req, res) => {
//     try {
//         const { loanAmount, loanType } = req.body;
//         const loan = new Loan({
//             userId: req.user.id,
//             loanAmount,
//             loanType,
//         });
//         await loan.save();
//         res.status(201).json(loan);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// // Get all loan applications for the logged-in user
// router.get('/', authMiddleware, async (req, res) => {
//     try {
//         const loans = await Loan.find({ userId: req.user.id });
//         res.json(loans);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// export { router };

import express from 'express';
const router = express.Router();

// Sample GET endpoint
router.get('/loans', (req, res) => {
  res.json({ message: 'Fetching all loans' });
});

// Sample POST endpoint
router.post('/loans', (req, res) => {
  res.json({ message: 'Creating a new loan' });
});

export {router};
