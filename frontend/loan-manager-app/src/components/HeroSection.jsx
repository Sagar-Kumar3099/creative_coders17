import React, { useState } from 'react';
import '../styles/HeroSection.css';
import loanImage from '../assets/loanImage.png';

const HeroSection = () => {
 
  const [activeStep, setActiveStep] = useState(1);

  // Steps data
  const steps = [
    { id: 1, title: 'Eligibility', description: 'Check your loan eligibility' },
    { id: 2, title: 'KYC', description: 'Complete your KYC process',src:'loanImage.png' },
    { id: 3, title: 'Pre Sanction', description: 'Follow steps to complete the pre sanction process' },
    { id: 4, title: 'Post Sanction', description: 'Get your loan credited in your bank account' },
  ];

  // Handler for step click
  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  const [tab, setTab] = useState("requirements");

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Fast & Easy <span>Loans</span> for Your Needs
        </h1>
        <p>Get Personal or Business Loans approved quickly with MyLoan.</p>
        <button className="cta-btn">Apply Now</button>
      </div>
      <div className="hero1-content">
        <h1>
        Simple Application Process
        </h1>
        <p>Get your loan hassle free in 4 step process</p>
       
      </div>
      {/* Image Section */}
      <div id='biman'>
      <div className="image-section">
        <img src={loanImage} alt="Loan Process" />
      </div>
      {/* Loan Steps Section */}
      <div className="steps-section">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step ${activeStep === step.id ? 'active' : ''}`}
            onClick={() => handleStepClick(step.id)}
          >
            <div className="step-circle"></div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="hero1-content">
        <h1>
        Documents and Eligibility
        </h1>
      </div>
      <div className="loan-container">
      
        {/* Eligibility Section */}
        <div className="eligibility">
          <div className="eligibility-box">
            <span>🟡</span>
            <p>Indian Citizen</p>
          </div>
          <div className="eligibility-box">
            <span>🟡</span>
            <p>23 to 65 years of age</p>
          </div>
          <div className="eligibility-box">
            <span>🟡</span>
            <p>Monthly income above ₹10,000</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="tabs">
          <button
            className={tab === "requirements" ? "active" : ""}
            onClick={() => setTab("requirements")}
          >
            Requirements
          </button>
          <button
            className={tab === "fees" ? "active" : ""}
            onClick={() => setTab("fees")}
          >
            Fee & Charges
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {tab === "requirements" ? (
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Salaried</th>
                  <th>Professionals</th>
                  <th>Self-Employed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PAN Card</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Aadhaar Card</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Bank Account Details</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Proof of Education</td>
                  <td>❌</td>
                  <td>✅</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>Proof of Business</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✅</td>
                </tr>
              </tbody>
            </table>
          ) :
           (
            <div className="fees">
              <p>
                <strong>Processing Fee:</strong> 4 - 6 % + GST
              </p>
              <p>
                <strong>GST:</strong> 18%
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
    
    
  );
};

export default HeroSection;
