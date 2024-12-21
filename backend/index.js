//Entry point to the Application

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const loanRoutes = require('./routes/loanRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


app.use(express.json()); // Ensure this middleware is applied
app.use((req, res, next) => {
    console.log("Incoming Request Body:", req.body);
    next();
});

// Routes
app.use('/api/loans', loanRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
