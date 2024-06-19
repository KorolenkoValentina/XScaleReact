import React, { useState } from 'react';
import Step1 from './components/StepOnePage';
import Step2 from './components/StepTwoPage';
import Step3 from './components/StepTreePage';
import '../../assets/styles/SignUpPage/signuppage.css'

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const submitForm = () => {
    // Handle form submission
    console.log('Form submitted');
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 prevStep={prevStep} submitForm={submitForm} />;
    default:
      return <Step1 nextStep={nextStep} />;
  }
};

export default SignUp;
