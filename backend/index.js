//Entry point to the Application

import express from "express";
import redis from "ioredis";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import { userRoutes } from './routes/userRoutes.js';
import { loanRoutes } from './routes/loanRoutes.js';
import { paymentRoutes } from './routes/paymentRoutes.js';
import cors from 'cors';

//const loanRoutes = require('./routes/loanRoutes');


app.use('/api', loanRoutes);


const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend/loan-manager-app/build')));

// Handle all routes and serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/loan-manager-app/build', 'index.html'));
});

// app.get("/",(req, res) => {
//     console.log("Your loan amount is: ")
// })

app.use('/api/payments', paymentRoutes);
dotenv.config();

const corsOptions = {
    origin: 'http://localhost:3000', // The address of the frontend app (React/Vue/etc.)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/payment', paymentRoutes);

app.listen(6000, () => {
    console.log("server start on http://localhost:6000")
});

