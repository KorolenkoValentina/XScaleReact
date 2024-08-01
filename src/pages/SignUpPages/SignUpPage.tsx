import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {  useNavigate  } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setUser } from '../../store/slices/userSlice';
import Step1 from './components/StepOnePage';
import Step2 from './components/StepTwoPage';
import Step3 from './components/StepTreePage';
import '../../assets/styles/SignUpPage/signuppage.css'




const SignUpPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    repeatPassword: '',
    companyName: '',
    businessNature: '',
    additionalPhone: '',
    jurisdiction: '',
    registrationNumber: '',
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const submitForm = (email:string, password:string)=>{
    
    const auth = getAuth();
    createUserWithEmailAndPassword  (auth, email, password)
    .then(({user})=>{
      console.log(user)
      dispatch(setUser({
        email:user.email,
        id:user.uid,
        token:user.refreshToken,
      }))
      navigate('/');
    })
    .catch(console.error)
  }
  
  


  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleInputChange={handleInputChange} formData={formData}/>;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} formData={formData}/>;
    case 3:
      return <Step3 prevStep={prevStep} submitForm={submitForm}  handleInputChange={handleInputChange} formData={formData}/>;
    default:
      return <Step1 nextStep={nextStep} handleInputChange={handleInputChange} formData={formData}/>;
  }
};

export default SignUpPage;
