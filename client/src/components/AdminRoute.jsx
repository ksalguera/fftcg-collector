import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

const AdminRoute = () => {
  const { user } = useContext(AppContext);

  if (!user.is_admin) {
    return <Navigate to='/'/>
  } 
  return <Outlet /> 
}

export default AdminRoute;