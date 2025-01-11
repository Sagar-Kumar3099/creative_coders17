# feel free to visit our website:-  https://fanciful-brioche-eb8947.netlify.app/

# creative_coders17
construct week project(loan app)

Loan Application Project

Project Overview

The Loan Application Project is a full-stack web application designed to provide a seamless experience for users and administrators to manage loans. The application offers functionalities like signing up, logging in, calculating loans, filling out loan forms, and viewing loan details through a user-friendly dashboard. Admins can manage loans via a dedicated admin page.

Folder Structure

Frontend

Path: frontend/loan-manager-app

dist: Contains bundled assets for production.

node_modules: Stores dependencies required for the frontend.

public: Contains static assets such as index.html.

src: Main source folder for the React app.

assets: Stores images, styles, and other static resources.

components: Contains reusable React components:

AdminPage.jsx: Admin dashboard.

FAQ.jsx: Frequently Asked Questions section.

Footer.jsx: Footer component.

HeroSection.jsx: Landing page hero section.

LoanBanner.jsx: Banner for loan-related information.

LoanCalculator.jsx: Loan calculation feature.

LoanDetails.jsx: User's loan details (dashboard).

LoanForm.jsx: Form to apply for loans.

LoanOptions.jsx: Displays various loan options.

Login.jsx: User login page.

Navbar.jsx: Navigation bar.

PrivateRoute.js: Protected routes for authenticated access.

Signup.jsx: User signup page.

redux: Implements state management using Redux.

Backend

Path: backend/

config

db.js: Database connection setup for MongoDB.

controllers

loanController.js: Handles loan-related requests.

paymentController.js: Manages payment-related operations.

userController.js: Handles user authentication and management.

middleware: Contains middleware functions.

models

loanModel.js: Mongoose schema for loans.

userModel.js: Mongoose schema for users.

routes: Defines API routes for the backend.

utils: Utility functions.

.env: Environment variables for secure configuration.

.gitignore: Lists files and folders to ignore in Git.

index.js: Entry point for the backend application.

package.json: Backend dependencies and scripts.

Features

User Authentication

Signup and login functionality using secure authentication mechanisms (e.g., bcrypt).

Protected routes for user-specific features.

Loan Calculator

Allows users to calculate loan repayment options.

Loan Application Form

Users can apply for loans through a detailed form.

Dashboard

Users can view their loan details and status.

Admin Page

API Integration

Backend APIs are implemented using Express.js.

State Management

Redux is used for managing the application state.

Technologies Used

Frontend

React.js: For building the user interface.

Redux: State management.

React Router: For routing and navigation.

Backend

Node.js: Backend runtime environment.

Express.js: Web framework for building APIs.

MongoDB: NoSQL database for data storage.

Bcrypt: For password hashing.

Installation Instructions

Prerequisites

Node.js and npm installed on your system.

MongoDB installed or access to a MongoDB instance.

Contributors

This project was collaboratively developed by:

Creative Coders Team

Member 1: Biman Gharai (Frontend Developer)

Member 2: Sagar Kumar (Backend Developer)

Member 3: Pradeep Kumar Maurya (Full Stack Developer)

Future Enhancements

Implement advanced analytics on loan data.

Improve the UI for a better user experience.

Extend admin features for better control.


