import { useState, useEffect, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { AppContext } from '../contexts/AppContext';

const PrivateRoutes = () => {
  const { user } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [])

  useEffect(() => {
    isLoading ? setUserLoading(true) : setUserLoading(false)
  }, [isLoading])

  return (
    <>
      { 
        userLoading ? <CircularProgress /> :
        user ? <Outlet /> : <Navigate to='/login'/>
      }
    </>
  )
}

export default PrivateRoutes;