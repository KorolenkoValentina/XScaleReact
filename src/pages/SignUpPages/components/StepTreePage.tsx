import React from 'react';
import '../../../assets/styles/SignUpPage/signuppage.css'
import StepProgress from './StepProgress';
import Header from './Header';

interface Step3Props {
prevStep: () => void;
submitForm: () => void;
}

const Step3: React.FC<Step3Props> = ({ prevStep, submitForm }) => {
  return (
  <>
    <Header />
    <div className="form-container">
      <h2>Sign Up</h2>
      <p>Step 3. Submit profile data</p>
      <StepProgress currentStep={3} totalSteps={3} />
      <div className="name-container">
        <div>
          <label>Name of the company*</label>
          <input type="text" required />
        </div>
        <div>
          <label>Nature of the business*</label>
          <input type="text" required />
        </div>
      </div>
      <div>
        <label>Additional phone number</label>
        <input type="text" />
      </div>
      <div>
        <label>Company jurisdiction*</label>
        <input type="text" required />
      </div>
      <div>
        <label>Registration numbers</label>
        <input type="text" />
      </div>
      <div className='btn-container'>
      <button className='btn-back' onClick={prevStep}>Back</button>
      <button onClick={submitForm}>Create Account</button>
      </div>
    </div>
  </>
  );
  };

  export default Step3;