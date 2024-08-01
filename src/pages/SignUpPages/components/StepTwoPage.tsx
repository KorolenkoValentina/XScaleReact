import React from 'react';
import '../../../assets/styles/SignUpPage/signuppage.css'
import StepProgress from './StepProgress';
import Header from './Header';

interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: any;
}

const Step2: React.FC<Step2Props> = ({ nextStep, prevStep, handleInputChange, formData  }) => {
  const validateForm = () => {
    return formData.password &&
           formData.repeatPassword &&
           formData.password === formData.repeatPassword;
  };
  return (
  <>
     <Header 
        linkText="Already have an account?" 
        buttonText="Log in" 
        linkTo="/login" 
        buttonTo="/login"
      />
    <div className="form-container">
      <h2>Sign Up</h2>
      <p>Step 2. Create a password</p>
      <StepProgress currentStep={2} totalSteps={3} />
      <div>
        <label htmlFor="password">Password*</label>
        <input    id="password"
        data-testid="password-input"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}/>
      </div>
      <div>
        <label>Repeat password*</label>
        <input  id="repeatPassword" type="password" required 
        name="repeatPassword"
        value={formData.repeatPassword} onChange={handleInputChange}/>
      </div>
      <div className='btn-container'>
      <button className='btn-back' onClick={prevStep}>Back</button>
      <button onClick={nextStep} disabled={!validateForm()}>Continue</button>
      </div>
    </div>
  </>
  );
  };

  export default Step2;