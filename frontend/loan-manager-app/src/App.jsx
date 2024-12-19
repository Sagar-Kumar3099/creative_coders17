import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoanForm from './components/LoanForm';
import LoanOptions from './components/LoanOptions';

import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LoanOptions />
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Loan Application Portal</h1>
      <LoanForm />
    </div>
      <Footer />
    </>
    
  );
}

export default App;
