import React, { useState } from "react";
import { TextField, Button, Stepper, Step, StepLabel, Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/loanform.css"; // Importing the CSS

const LoanForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loanType = location.state?.loanType || "General Loan";

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: { name: "", email: "" },
    financialInfo: { income: "", creditScore: "" },
    documents: { idProof: "" },
  });
  const [errors, setErrors] = useState({});

  const steps = ["Personal Info", "Financial Info", "Upload Documents"];

  // Validate form fields
  const validateStep = (step) => {
    const currentErrors = {};
    const currentStep = Object.keys(formData)[step];
    const stepData = formData[currentStep];

    Object.keys(stepData).forEach((field) => {
      if (!stepData[field]) {
        currentErrors[field] = "This field is required.";
      }
    });

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  // Move to next step if all fields are valid
  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prev) => prev + 1);
    }
  };

  // Go back to previous step
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Handle changes in input fields
  const handleChange = (e, stepKey) => {
    setFormData({
      ...formData,
      [stepKey]: {
        ...formData[stepKey],
        [e.target.name]: e.target.value,
      },
    });

    // Clear errors when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  // Submit the form data
  const handleSubmit = () => {
    const { personalInfo, financialInfo, documents } = formData;

    // Validation check before submitting
    if (
      !personalInfo.name ||
      !personalInfo.email ||
      !financialInfo.income ||
      !financialInfo.creditScore ||
      !documents.idProof
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Redirect to LoanDetails page and pass data via state
    navigate("/loan-details", { state: { formData } });
  };

  // Render content for each step
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              name="name"
              label="Name"
              value={formData.personalInfo.name}
              onChange={(e) => handleChange(e, "personalInfo")}
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              name="email"
              label="Email"
              value={formData.personalInfo.email}
              onChange={(e) => handleChange(e, "personalInfo")}
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email}
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
              onChange={(e) => handleChange(e, "financialInfo")}
              fullWidth
              margin="normal"
              error={!!errors.income}
              helperText={errors.income}
            />
            <TextField
              name="creditScore"
              label="Credit Score"
              value={formData.financialInfo.creditScore}
              onChange={(e) => handleChange(e, "financialInfo")}
              fullWidth
              margin="normal"
              error={!!errors.creditScore}
              helperText={errors.creditScore}
            />
          </>
        );
      case 2:
        return (
          <TextField
            name="idProof"
            label="Adhar no."
            value={formData.documents.idProof}
            onChange={(e) => handleChange(e, "documents")}
            fullWidth
            margin="normal"
            error={!!errors.idProof}
            helperText={errors.idProof}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box className="loan-form-container">
      <h2 className="loan-form-title">{loanType} Application</h2>
      <Stepper activeStep={activeStep} alternativeLabel className="loan-form-stepper">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box className="loan-form-content">{renderStepContent(activeStep)}</Box>
      <Box className="loan-form-buttons">
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
