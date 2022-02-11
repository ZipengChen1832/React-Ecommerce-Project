import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function PrivateRouter() {
    const {currentUser} = useAuth();
    const location = useLocation();
    if(currentUser===undefined) return null;
    if(!currentUser) return <Navigate state={{from:location}} to="/signin"/>
    return <Outlet />
}
