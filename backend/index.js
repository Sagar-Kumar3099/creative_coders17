//Entry point to the Application

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const loanRoutes = require('./routes/loanRoutes');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/userModel"); 


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors('*'));
app.use(bodyParser.json());


app.use(express.json()); // Ensure this middleware is applied
app.use((req, res, next) => {
    console.log("Incoming Request Body:", req.body);
    next();
});

// Routes
app.use('/api/loans', loanRoutes);

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  console.log(username)

  // Check if the username is already in use
  const existingUser = await User.findOne({ username });
  if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ 'username': username, 'password': hashedPassword });
  await newUser.save();

  res.status(201).json({ message: "User registered successfully" });
});

// Log-In Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await User.findOne({ username });
  if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
  }

  // Compare the entered password with the stored hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid username or password" });
  }

  res.status(200).json({ message: "Login successful" });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
