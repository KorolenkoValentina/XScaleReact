import React from 'react';
import '../../../assets/styles/SignUpPage/signuppage.css'
import StepProgress from './StepProgress';
import Header from './Header';

interface Step3Props {
  prevStep: () => void;
  submitForm: (email: string, password: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: any;
}



const Step3: React.FC<Step3Props> = ({prevStep, submitForm, handleInputChange, formData }) => {
 
  const handleSubmit = () => {
    submitForm(formData.email, formData.password);
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
      <p>Step 3. Submit profile data</p>
      <StepProgress currentStep={3} totalSteps={3} />
      <div className="name-container">
        <div>
          <label htmlFor="companyName">Name of the company*</label>
          <input  id="companyName" type="text" required 
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}/>
        </div>
        <div>
          <label>Nature of the business*</label>
          <input type="text" required 
          name="businessNature"
           value={formData.businessNature} onChange={handleInputChange}/>
        </div>
      </div>
      <div>
        <label>Additional phone number</label>
        <input type="text" 
        name="additionalPhone"
        value={formData.additionalPhone} onChange={handleInputChange}/>
      </div>
      <div>
        <label htmlFor="jurisdiction">Company jurisdiction*</label>
        <input id="jurisdiction" type="text" required 
        name="jurisdiction"
        value={formData.jurisdiction} onChange={handleInputChange}/>
      </div>
      <div>
        <label>Registration numbers</label>
        <input type="text" 
        name="registrationNumber"
        value={formData.registrationNumber} onChange={handleInputChange}/>
      </div>
      <div className='btn-container'>
      <button className='btn-back' onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Create Account</button>
      </div>
    </div>
  </>
  );
  };

  export default Step3;