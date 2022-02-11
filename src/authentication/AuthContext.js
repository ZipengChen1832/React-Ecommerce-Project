import React, {useContext, useEffect, useState} from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utility/firebase';

const AuthContext = React.createContext(); 

export function useAuth(){
    return useContext(AuthContext);
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,user=>{
            setCurrentUser(user);
        })
        return unsub;
    },[])

    function signin(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function signout(){
        return signOut(auth);
    }


const values = {
    currentUser,
    signin,
    signup,
    signout
}

  return <AuthContext.Provider value={values}>
      {children}
  </AuthContext.Provider>;
}
