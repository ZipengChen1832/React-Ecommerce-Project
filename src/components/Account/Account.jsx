import React, {useState,useEffect} from 'react';
import { useAuth } from '../../authentication/AuthContext';
import './account.css';
import {FiEdit3, FiSave} from 'react-icons/fi';

import { getDatabase, ref, set, onValue, get, child, update } from "firebase/database";
const db = getDatabase();

export default function Account() {
    const {signout, currentUser} = useAuth();
    // const [userinfo,setUserinfo] = useState();

    // const uid = currentUser.uid;
    // const dbRef = ref(getDatabase());
    // set(ref(db,'users/'+uid),{
    //     name: "John Smith",
    //     address: "123 React St."
    // })


    // useEffect(()=>{
    //     onValue(ref(db,`users/${currentUser.uid}`),snapshot=>{
    //         const data = snapshot.val();
    //         console.log(data);
    //     })
    // },[]);
    
    

  return <main id='account'>
    <h1>My Account</h1>
    <div className='profile'>
        <h2 className='info-title'>Email</h2>
        <div className='user-info'>{currentUser.email}</div>

        <Info title="Full name" content="name"/>
        <Info title="Address" content="address"/>
        <button className='signout-btn' onClick={signout}>Sign Out</button>
    </div>

  </main>;
}


function Info({title,content}) {
    const [editing,setEditing] = useState(false);
    const [userInfo,setUserInfo] = useState();

    const {currentUser} = useAuth();
    const uid = currentUser.uid;

    useEffect(()=>{
        onValue(ref(db,`users/${uid}/info/${content}`),snapshot=>{
            const data = snapshot.val();
            console.log(data);
            setUserInfo(data);
        })
    },[]);

    function handleChange(e){
        setUserInfo(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        set(ref(db,`users/${currentUser.uid}/info/${content}`),
            userInfo
        )
        setEditing(false);
    }

    return <div key={content}>
        <h2 className='info-title'>{title}</h2>
        {editing ? 
        <form onSubmit={handleSubmit} className='user-info'>
            <input autoFocus onChange={handleChange} value={userInfo}></input>
            <FiSave className='icon' >save</FiSave>
        </form> : 
        <div className='user-info'>
            {userInfo}
            <FiEdit3 className='icon' onClick={()=>{setEditing(true)}}>edit</FiEdit3>
        </div>}
    </div> 
}
