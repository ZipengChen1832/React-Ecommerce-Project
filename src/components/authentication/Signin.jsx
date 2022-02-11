import React, {useState, useRef} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../authentication/AuthContext';
import './auth.css';

export default function Signin() {
    const {signin,currentUser} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState();

    async function handleSubmit(e){
        e.preventDefault();
        setAlert();
        setLoading(true);
        try {
            const userCredential = await signin(emailRef.current.value,passwordRef.current.value);
            setAlert({message:"Success!",type:"success"});
            // console.log(userCredential.user);
            setLoading(false);
        } catch(error){
            console.log(error.message);
            setAlert({message:error.message,type:"danger"});
            setLoading(false);
            return;
        }

        if(location.state?.from){
            navigate(location.state.from,{replace:true});
        } else {
            navigate('/account',{replace:true});
        }
    }

  return <main id="signin" className='auth'>
    <h1>Sign In</h1>
    {alert && <div className={`alert ${alert.type}`}>{alert.message}</div>}
    {currentUser && currentUser.user}
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" ref={emailRef} placeholder='Enter email'/>
        </div>
        <div>
            <input type="password" ref={passwordRef} placeholder='Enter password'/>
        </div>
    <button className='submit-btn' type='submit' disabled={loading}>SIGN IN</button>
    </form>
    <div>Don't have an account? <Link style={{color:'blue', textDecoration:'underline'}} to='/signup'>sign up</Link> here </div>
    
  </main>;
}
