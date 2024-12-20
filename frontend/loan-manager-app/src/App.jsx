import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoanForm from './components/LoanForm';
import LoanOptions from './components/LoanOptions';
import LoanCalculator from './components/LoanCalculator';
import Footer from './components/Footer';
import LoanBanner from './components/LoanBanner';
import FAQ from './components/FAQ';

function App() {
  return (
    <>
    
      <Navbar />
      <div id="home" className="section"><LoanBanner/></div>
      <div id="eligibility" className="section"><HeroSection/></div>
      <div id="personal-loan" className="section"><LoanOptions/></div>
      <div id="emi-calculator" className="section"><LoanCalculator/></div>
      <div id="FAQ" className="section"><FAQ/></div>
      <div id="about" className="section"></div>
      <div id="contact" className="section"></div>
      <Footer/>
    </>
    
  );
}

export default App;
