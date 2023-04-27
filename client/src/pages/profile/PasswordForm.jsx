import { useState } from 'react';
import { Alert, Box, Button, FormControl, TextField, Typography } from '@mui/material';
import SnackbarLogout from './SnackbarLogout';

const PasswordForm = () => {
  const initialState = { current_password: '', password: '', password_confirmation: '' };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(null);
  const [open, setOpen] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);;

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  
  const handleClose = reason => reason !== 'clickaway' && setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('/change-password', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        setErrors(errorData.errors)
      } else {
        setErrors(null)
        setPasswordChanged(true)
        setOpen(true)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box component='form' sx={{ maxWidth: 400 }} onSubmit={handleSubmit}>
      <Typography variant='h3' my={2}>Change Password</Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant='subtitle1' mb={1}>Current Password</Typography>
        <TextField
          required
          id='currentPassword'
          type='password'
          name='current_password'
          value={formData.current_password}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant='subtitle1' mb={1}>New Password</Typography>
        <TextField
          required
          id='newPassword'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant='subtitle1' mb={1}>Confirm New Password</Typography>
        <TextField
          required
          id='newPasswordConfirmation'
          type='password'
          name='password_confirmation'
          value={formData.password_confirmation}
          onChange={handleInputChange}
        />
      </FormControl>
      { errors && (<Alert severity='error'>{errors}</Alert>) }
      <Button type='submit' variant='contained' color='primary' sx={{ mt: 2 }}>
        Change Password
      </Button>
      <SnackbarLogout 
        type='success' 
        message='Password has been successfully changed! Logging out...' 
        passwordChanged={passwordChanged} 
        open={open}
        onHandleClose={handleClose}
      />
    </Box>
  )
}

export default PasswordForm;