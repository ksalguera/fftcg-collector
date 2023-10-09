import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

const HomeRoute = () => {
  const { user } = useContext(AppContext);

  if (user) {
    return <Navigate to='/collection-dashboard' />
  } 
  return <Outlet /> 
}

export default HomeRoute;