import React,{useState} from 'react';

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import {  useNavigate  } from 'react-router-dom';
import { setUser } from '../store/slices/userSlice';
import Header from './SignUpPages/components/Header'
import '../assets/styles/SignUpPage/signuppage.css'
import { useAppDispatch } from '../hooks/redux-hooks';



const LoginPage: React.FC = () => {
    const[email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const handle = () => {
        handleLogin(email, password);
    };

    const handleLogin = (email:string, password:string)=>{
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
        }
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
            <label>Email*</label>
            <input type="email" required
             value={email}
             onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div>
            <label>Password*</label>
            <input type="password" required 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <p>Forgot password</p>
        <div className="button-container">
            <button onClick={handle}>Log in</button>
            <button onClick={handleGoogleSignIn}>Log in with Google</button>
        </div>

    </div>
</>
);
};

export default LoginPage;