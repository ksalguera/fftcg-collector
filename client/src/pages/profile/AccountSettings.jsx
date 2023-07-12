import { useState, useEffect, useContext } from 'react';
import { Alert, Box, Button, CircularProgress, FormControl, TextField, Typography } from '@mui/material';
import { AppContext } from '../../contexts/AppContext';
import PasswordForm from './PasswordForm';
import DeleteAccount from './DeleteAccount';
import SnackbarCustom from '../../components/SnackbarCustom';

const AccountSettings = () => {
  const { user, setUser } = useContext(AppContext);
  const [errors, setErrors] = useState(null);
  const [open, setOpen] = useState(false);
  const initialState = {
    email: '',
    password: '',
    profile_attributes: {
      display_name: ''
    }
  }
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || '',
        password: '',
        profile_attributes: {
          display_name: user.profile.display_name || ''
        }
      });
    }
  }, [user]);

  const handleInputChange = e => {
    if (e.target.name === 'display_name') {
      setFormData({...formData, profile_attributes: { [e.target.name]: e.target.value }});
    } else {
      setFormData({...formData, [e.target.name]: e.target.value});
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const res = await fetch(`/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        setErrors(errorData.errors)
      } else {
        const data = await res.json();
        setUser(data)
        setErrors(null)
        setOpen(true) 
        setFormData({...formData, password: ''})
      }
    } catch (error) {
      console.error(error);
    }
  }
 
  return (
    <> 
      { !user ? <CircularProgress />
      :
      <Box sx={{ width: '100%', flexDirection: 'column' }} className='container'>
        <Typography variant='h2' mb={2}>Settings</Typography>
        <Box component='form' sx={{ maxWidth: 400 }} onSubmit={handleSubmit}>
          <Typography variant='h3' mb={2}>Account Information</Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant='subtitle1' mb={1}>Display Name</Typography>
            <TextField
              required
              type='text'
              name='display_name'
              value={formData.profile_attributes.display_name || ''}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant='subtitle1' mb={1}>Email Address</Typography>
            <TextField
              required
              type='email'
              name='email'
              value={formData.email || ''}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant='subtitle1' mb={1}>Current Password</Typography>
            <TextField
              required
              type='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormControl>
          { errors && (<Alert severity='error'>{errors}</Alert>) }
          <Button type='submit' variant='contained' color='primary' sx={{ mt: 2 }}>
            Update Account Information
          </Button>
        </Box>
        <PasswordForm />
        <DeleteAccount />
        <SnackbarCustom
          type='success' 
          message='Account Information Updated Successfully' 
          open={open}
          onHandleClose={reason => reason !== 'clickaway' && setOpen(false)}
        />
      </Box>
      }
    </>
  )
}

export default AccountSettings;