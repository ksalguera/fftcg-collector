import { useEffect, useContext, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

const HomeRoute = () => {
  const { user } = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timeOut)
  }, [])
  
  if (loading) {
    return <LinearProgress />
  } else if (user) {
    return <Navigate to='/collection-dashboard' />
  }
  return <Outlet /> 
}

export default HomeRoute;