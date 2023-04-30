import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { AppContext } from '../../contexts/AppContext';
import SnackbarLogout from './SnackbarLogout';
import DialogGeneral from '../../components/DialogGeneral';

const DeleteAccount = () => {
  const { user } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleClose = reason => reason !== 'clickaway' && setOpen(false);

  const handleDiaglogOpen = () => setOpenDialog(true);

  const handleCloseDialog = () => setOpenDialog(false);
  
  const handleUserDelete = async () => {
    const res = await fetch(`/users/${user.id}`, { method: 'DELETE' });
    if (res.ok) { 
      setPasswordChanged(true)
      setOpen(true)
    }
  }

  return (
    <>
      <Divider orientation='horizontal' sx={{ my: 2, width: '100%' }} variant='fullWidth' />
      <Button variant='outlined' color='primary' onClick={handleDiaglogOpen}>
        Delete Account
      </Button>
      <Typography variant='subtitle1' mt={1}>
        Clicking this button will delete all user account information and data. Please note that deleted accounts cannot be restored.
      </Typography>
      <DialogGeneral 
        open={openDialog} 
        onHandleDialogClose={handleCloseDialog}
        onConfirmation={handleUserDelete}
        title='DELETE ACCOUNT'
        message='Account data cannot be restored once deleted.'
      />
      <SnackbarLogout 
        type='success' 
        message='Account has been deleted. Logging out...' 
        passwordChanged={passwordChanged} 
        open={open}
        onHandleClose={handleClose}
      />
    </>
  )
}

export default DeleteAccount;