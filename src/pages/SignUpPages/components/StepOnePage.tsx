import React from 'react';
import '../../../assets/styles/SignUpPage/signuppage.css'
import StepProgress from './StepProgress';
import Header from './Header';

interface Step1Props {
nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ nextStep }) => {
  return (
  <>
    <Header />
    <div className="form-container">
      <h2>Sign Up</h2>
      <p>Step 1. Start sign up</p>
      <StepProgress currentStep={1} totalSteps={3} />
      <div className="name-container">
        <div>
          <label>First Name*</label>
          <input type="text" required />
        </div>
        <div>
          <label>Last Name*</label>
          <input type="text" required />
        </div>
      </div>
      <div>
        <label>Phone number*</label>
        <input type="text" required />
      </div>
      <div>
        <label>Email*</label>
        <input type="email" required />
      </div>

      <div className='checkbox-container'>
        <input type="checkbox" required />
        <label>I agree to the Privacy Policy</label>
      </div>
      <div className="button-container">
          <button onClick={nextStep}>Continue</button>
        </div>

    </div>
  </>
  );
  };

  export default Step1;