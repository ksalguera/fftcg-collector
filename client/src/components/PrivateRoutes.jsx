import { useState, useEffect, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { UserContext } from '../contexts/UserContext';

const PrivateRoutes = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

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