import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoanBanner from './components/LoanBanner';
import HeroSection from './components/HeroSection';
import LoanOptions from './components/LoanOptions';
import LoanCalculator from './components/LoanCalculator';
import FAQ from './components/FAQ';
import Signup from './components/Signup';
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import LoanForm from './components/LoanForm';
import LoanDetails from './components/LoanDetails'; // Import LoanDetails
import './styles/global.css';

// Combine components for the homepage
function HomePage() {
  return (
    <>
      <div id="home" className="section">
        <LoanBanner />
      </div>
      <div id="eligibility" className="section">
        <HeroSection />
      </div>
      <div id="personal-loan" className="section">
        <LoanOptions />
      </div>
      <div id="emi-calculator" className="section">
        <LoanCalculator />
      </div>
      <div id="FAQ" className="section">
        <FAQ />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Homepage */}
        <Route path="/signup" element={<Signup />} /> {/* Signup */}
        <Route path="/login" element={<Login />} /> {/* Login */}
        <Route path="/admin" element={<AdminPage />} /> {/* Admin */}
        <Route path="/loan-form" element={<LoanForm />} /> {/* LoanForm */}
        <Route path="/loan-details" element={<LoanDetails />} /> {/* LoanDetails */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
