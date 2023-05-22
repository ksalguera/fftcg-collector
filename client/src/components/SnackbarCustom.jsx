import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const SnackbarCustom = ({ type, message, open, onHandleClose }) => {

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={onHandleClose}>
      <Alert onClose={onHandleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarCustom;