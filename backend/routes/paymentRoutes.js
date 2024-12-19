import express from 'express';
const router = express.Router();
import {makePayment} from'../controllers/paymentController.js';
import {authMiddleware} from '../middleware/authMiddleware.js';

router.post('/payment', authMiddleware, makePayment);

export { router };
