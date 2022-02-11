import React, {useState} from 'react'

import { useNavigate, Outlet, useLocation } from "react-router-dom";

import { BiMenu } from 'react-icons/bi';
import { RiUser3Fill } from 'react-icons/ri';
import { BsCartFill } from 'react-icons/bs';
import { useEffect } from 'react';

export default function Nav() {
    const navigate = useNavigate();
    const location = useLocation();

    const [showmenu,setShowmenu] = useState(false);

    function redirect(e){
        navigate(`/${e.currentTarget.dataset.page}`,{replace:false});
    }

    useEffect(()=>{
        setShowmenu(false);
    },[location])

    return (
        <>
        <nav className='navbar'>
            {/* <a href='/' className='left-account-icon'><RiUser3Fill/></a> */}
            <RiUser3Fill className='left-account-icon' data-page="account" onClick={redirect}/>
            <div className='logo' data-page="" onClick={redirect}>
                Universal Fitness
            </div>
            <ul className="list-container">
                <li><a onClick={redirect} data-page="">home</a></li>
                <li><a onClick={redirect} data-page="products">products</a></li>
                <li><a onClick={redirect} data-page="about">about</a></li>
                {/* <li><a onClick={redirect} data-page="contact">contact</a></li>
                <li><a onClick={redirect} data-page="contact">contact</a></li> */}
                
            </ul>
            <div className="account-container">
                {/* <div className="account-name">account</div> */}
                <RiUser3Fill className='account-icon menu-icon' onClick={()=>{navigate("account")}}/>
                <BsCartFill className='cart-icon menu-icon' onClick={()=>{navigate('cart')}}/>
            </div>
            <div className="menu-container">
                <BiMenu onClick={()=>{setShowmenu(!showmenu)}}/>
            </div>
            {showmenu && <aside className='mobile-menu'>
                <div><a onClick={redirect} data-page="">home</a></div>
                <div><a onClick={redirect} data-page="products">products</a></div>
                <div><a onClick={redirect} data-page="about">about</a></div>
            </aside>}
        </nav>
        <Outlet/>    
        </>
    )
}
