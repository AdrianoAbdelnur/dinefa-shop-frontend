import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Unauthorized from '../unauthorized/Unauthorized';
import "./requireAuth.css"
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
    const { setAuth } = useAuth();
    const [loggedStatus, setLoggedStatus] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAuth();
    }, [])

    useEffect(() => {
      if (loggedStatus) {
        setAuth(loggedStatus);
        setIsLoading(false)
      }
    }, [loggedStatus]);
    


    const getAuth = async() => {
        const token = localStorage.getItem("jwtoken")
        try {
            const { data } = await axios.get('http://localhost:4000/api/user/status', {headers: {Authorization : token}});
            if (!data?.isLogged) setLoggedStatus({ isLogged: false });
            else setLoggedStatus({ isLogged: true, role: data.role });
        } catch (error) {
            setIsLoading(false);
        }
    }

    return (
      <div className='requireAuth_container'>
        {isLoading?  <div>Loading!</div> : loggedStatus?.isLogged
            ? <Outlet/>
            : <Unauthorized/>
        }
      </div>
    );
};

export default RequireAuth