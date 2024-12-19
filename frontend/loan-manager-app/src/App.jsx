import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoanOptions from './components/LoanOptions';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LoanOptions />
      <Footer />
    </>
  );
}

export default App;