import { useEffect, useContext } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { AppContext } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const SnackbarLogout = ({ type, message, passwordChanged, open, onHandleClose }) => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (passwordChanged) {
      const timeoutId = setTimeout(() => {
        setUser(null)
        navigate('/login')
      }, 5000); 
      return () => clearTimeout(timeoutId);
    }
  }, [passwordChanged])

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={onHandleClose}>
      <Alert onClose={onHandleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarLogout;