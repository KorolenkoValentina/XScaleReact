import React from 'react';
import '../../../assets/styles/SignUpPage/signuppage.css'
import StepProgress from './StepProgress';
import Header from './Header';

interface Step1Props {
  nextStep: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: any;
}

const Step1: React.FC<Step1Props> = ({ nextStep, handleInputChange, formData  }) => {
  // const[name, setName]= useState('')
  // const[lastName, setLastName]= useState('')
  // const[number, setNumber]= useState('')
  // const[email, setEmail]= useState('')

  const validateForm = () => {
    return formData.firstName && formData.lastName && formData.phoneNumber && formData.email && formData.email.includes('@');
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
      <p>Step 1. Start sign up</p>
      <StepProgress currentStep={1} totalSteps={3} />
      <div className="name-container">
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input id="firstName" type="text" required 
          name="firstName" 
          value={formData.firstName} onChange={handleInputChange}/>
        </div>
        <div>
          <label>Last Name*</label>
          <input  id="lastName" type="text" required 
           name="lastName"
          value={formData.lastName} onChange={handleInputChange}/>
        </div>
      </div>
      <div>
        <label>Phone number*</label>
        <input   id="phoneNumber" type="text" required 
        name="phoneNumber" 
        value={formData.phoneNumber} onChange={handleInputChange}/>
      </div>
      <div>
        <label htmlFor="email">Email*</label>
        <input  id="email"
          name="email"
          required
          type="email"
          value={formData.email}
          onChange={handleInputChange}/>
      </div>

      <div className='checkbox-container'>
        <input type="checkbox" required />
        <label>I agree to the Privacy Policy</label>
      </div>
      <div className="button-container">
          <button onClick={nextStep} disabled={!validateForm()}>Continue</button>
        </div>

    </div>
  </>
  );
  };

  export default Step1;