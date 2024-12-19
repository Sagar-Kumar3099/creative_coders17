import React, { useState } from 'react';
import { TextField, Button, Stepper, Step, StepLabel, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setLoanDetails } from '../redux/loanSlice';
import axios from 'axios';

const LoanForm = () => {
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: { name: '', email: '' },
    financialInfo: { income: '', creditScore: '' },
    documents: { idProof: '' },
  });

  const steps = ['Personal Info', 'Financial Info', 'Upload Documents'];

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleChange = (e, stepKey) => {
    setFormData({
      ...formData,
      [stepKey]: {
        ...formData[stepKey],
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/loans', formData);
      dispatch(setLoanDetails(response.data));
      alert('Loan application submitted successfully!');
    } catch (error) {
      console.error('Error submitting loan application:', error);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              name="name"
              label="Name"
              value={formData.personalInfo.name}
              onChange={(e) => handleChange(e, 'personalInfo')}
              fullWidth
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              value={formData.personalInfo.email}
              onChange={(e) => handleChange(e, 'personalInfo')}
              fullWidth
              margin="normal"
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              name="income"
              label="Income"
              value={formData.financialInfo.income}
              onChange={(e) => handleChange(e, 'financialInfo')}
              fullWidth
              margin="normal"
            />
            <TextField
              name="creditScore"
              label="Credit Score"
              value={formData.financialInfo.creditScore}
              onChange={(e) => handleChange(e, 'financialInfo')}
              fullWidth
              margin="normal"
            />
          </>
        );
      case 2:
        return (
          <TextField
            name="idProof"
            label="ID Proof"
            value={formData.documents.idProof}
            onChange={(e) => handleChange(e, 'documents')}
            fullWidth
            margin="normal"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '50%', margin: 'auto', mt: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 3 }}>{renderStepContent(activeStep)}</Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default LoanForm;
