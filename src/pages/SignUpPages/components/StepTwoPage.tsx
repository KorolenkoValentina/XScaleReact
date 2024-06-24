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
        <label>Password*</label>
        <input type="password" required 
        name="password"
        value={formData.password} onChange={handleInputChange}/>
      </div>
      <div>
        <label>Repeat password*</label>
        <input type="password" required 
        name="password"
        value={formData.repeatPassword} onChange={handleInputChange}/>
      </div>
      <div className='btn-container'>
      <button className='btn-back' onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Continue</button>
      </div>
    </div>
  </>
  );
  };

  export default Step2;