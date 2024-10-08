 
import React, { useState } from 'react';


const Step1 = () => (
  <div>
    <h2>Step 1: Personal Information</h2>
    <input type="text" placeholder="First Name" required />
    <input type="text" placeholder="Last Name" required />
  </div>
);

const Step2 = () => (
  <div>
    <h2>Step 2: Contact Information</h2>
    <input type="email" placeholder="Email" required />
    <input type="tel" placeholder="Phone Number" required />
  </div>
);

const Step3 = () => (
  <div>
    <h2>Step 3: Confirmation</h2>
    <p>Review your information and submit.</p>
  </div>
);


const steps = [
  { id: 1, label: 'Step 1', content: <Step1 /> },
  { id: 2, label: 'Step 2', content: <Step2 /> },
  { id: 3, label: 'Step 3', content: <Step3 /> },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div className="multi-step-form">
      <h1>Multi-Step Form</h1>
      <div className="progress-indicator">
        {steps.map((step, index) => (
          <div key={step.id} className={`step ${index <= currentStep ? 'active' : ''}`}>
            {step.label}
          </div>
        ))}
      </div>
      <div className="step-content">{steps[currentStep].content}</div>
      <div className="buttons">
        <button onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
