import React,{useState} from 'react';

import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import {  useNavigate  } from 'react-router-dom';
import { setUser } from '../store/slices/userSlice';
import Header from './SignUpPages/components/Header'
import '../assets/styles/SignUpPage/signuppage.css'
import { useAppDispatch } from '../hooks/redux-hooks';



const LoginPage: React.FC = () => {
    const[email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const dispatch = useAppDispatch()
    const navigate = useNavigate();

      const validateForm = () => {
        let isValid = true;
        setEmailError('');
        setPasswordError('');

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        }

        if (!password || password.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
            isValid = false;
        }

        return isValid;
    };
    const handle = () => {
        handleLogin(email, password);
    };

    const handleLogin = (email:string, password:string)=>{
      if (validateForm()) {
        const auth = getAuth();
        signInWithEmailAndPassword (auth, email, password)
        .then(({user})=>{
            console.log(user)
            dispatch(setUser({
              email:user.email,
              id:user.uid,
              token:user.refreshToken,
            }))
            navigate('/');
          })
          .catch(error => {
            console.error("Error during sign-in:", error.code, error.message);
          });
        }}
        const handleGoogleSignIn = () => {
          const auth = getAuth();
          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
            .then((result) => {
              const user = result.user;
              console.log(user);
              dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
              }));
              navigate('/');
            })
            .catch(console.error);
        };
    
return (
<>
<Header 
        linkText="Don’t have an account?" 
        buttonText="Sign Up" 
        linkTo="/signup" 
        buttonTo="/signup"
      />
    <div className="form-container">
        <h2>Log in</h2>
        <div>
            <label htmlFor="email">Email*</label>
            <input id="email" type="email" required
             value={email}
             onChange={(e)=>setEmail(e.target.value)}  data-testid="email-input"/>
              {emailError && <p className="error" data-testid="email-error">{emailError}</p>}
        </div>

        <div>
            <label htmlFor="password">Password*</label>
            <input id="password" type="password" required 
            value={password}
            onChange={(e)=>setPassword(e.target.value)} data-testid="password-input"/>
            {passwordError && <p className="error" data-testid="password-error"> {passwordError}</p>}
        </div>
        <p>Forgot password</p>
        <div className="button-container">
            <button  onClick={handle} data-testid="login-button">Log in</button>
            <button onClick={handleGoogleSignIn} data-testid="google-login-button">Log in with Google</button>
        </div>

    </div>
</>
);
};

export default LoginPage;