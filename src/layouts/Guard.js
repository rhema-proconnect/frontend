import React from 'react'
import { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AUTH_PATH } from '../routes';

export default function Guard({children}) 
{
    const isAuth = localStorage.getItem('token') || null;

    // console.log("use",isAuth)
    const { pathname }  = useLocation();
    const [requestLocation, setRequestLocation] = useState(null);

    if(!isAuth)
    {
        if(pathname !== requestLocation){
            setRequestLocation(pathname);
        }
        return <Navigate to="/login" />;
    }
    if(requestLocation && pathname !== requestLocation)
    {
        setRequestLocation(null);
        return <Navigate to={requestLocation === AUTH_PATH.login ? '/' : requestLocation} />
    }
    return <div>{children}</div>
}