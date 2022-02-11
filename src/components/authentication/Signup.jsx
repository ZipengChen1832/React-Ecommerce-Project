import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../authentication/AuthContext';
import './auth.css'

export default function Signup() {
    const {signup} = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState();

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        setAlert();
        
        if(passwordRef.current.value!=passwordConfirmRef.current.value){
            setAlert({message:"Passwords don't match!",type:"error"});
            setLoading(false);
            return;
        }

        try {
            const userCredential = await signup(emailRef.current.value,passwordRef.current.value);
            setAlert({message:"Sign Up Success!",type:"success"});
        } catch(error) {
            setAlert({message:error.message,type:"danger"});
            setLoading(false);
            return;
        }

        setLoading(false);
    }

  return <main id="signup" className='auth'>
    <h1>Sign Up</h1>
    {alert && <div className={`alert ${alert.type}`}>{alert.message}</div>}
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" id='user-email' ref={emailRef} required placeholder='Enter email'/>
        </div>
        <div>
            <input type="password" id='user-password' ref={passwordRef} required placeholder='Enter password'/>
        </div>
        <div>
            <input type="password" id='user-passwordConfirm' ref={passwordConfirmRef} required placeholder='Confirm password'/>
        </div>
        <button className='submit-btn' type='submit' disabled={loading}>Sign Up</button>
    </form>
        <div>Already have an account? <Link style={{color:'blue',textDecoration:'underline'}} to='/signin'>sign in</Link> here </div>
    
  </main>;
}
