import { useEffect, useContext, useState } from 'react';
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
    return <Outlet />
  } else {
    return user ? <Navigate to='/collection-dashboard' /> : <Outlet />
  }
}

export default HomeRoute;