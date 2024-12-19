import stripe from 'stripe';
import { Loan } from '../models/loan.js';

const makePayment = async (req, res) => {
    const { loanId, paymentAmount, paymentMethodId } = req.body;

    try {
        const loan = await Loan.findById(loanId);
        
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }

        // Create a payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: paymentAmount * 100,  // Convert to cents
            currency: 'INR',
            payment_method: paymentMethodId,
            confirm: true,
        });

        // Update loan repayment status
        loan.repaymentSchedule.push({
            date: new Date(),
            amount: paymentAmount,
            status: 'Paid',
        });

        await loan.save();

        res.status(200).json({ message: 'Payment successful', paymentIntent });
    } catch (error) {
        res.status(500).json({ message: 'Payment failed', error: error.message });
    }
};
export {makePayment}