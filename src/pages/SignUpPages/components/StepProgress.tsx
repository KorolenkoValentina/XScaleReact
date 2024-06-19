import React from 'react';
import '../../../assets/styles/SignUpPage/signuppage.css'

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className="step-progress">
      {steps.map(step => (
        <div key={step} className={`step ${currentStep >= step ? 'active' : ''}`}>
          <div className="step-circle">{step}</div>
          {step < totalSteps && <div className="step-line"></div>}
        </div>
      ))}
    </div>
  );
};

export default StepProgress;
