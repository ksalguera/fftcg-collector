import { useState } from 'react';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';

const LoginForm = () => {
  const initialState = { email: '', password: '' };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(null);

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <Box component='form' sx={{ maxWidth: 400 }} onSubmit={handleSubmit}>
      <Typography variant='h2' mb={2}>Login To Your Account</Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant='subtitle1' mb={1}>Email Address</Typography>
        <TextField
          required
          id='email'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant='subtitle1' mb={1}>Password</Typography>
        <TextField
          required
          id='password'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
        />
      </FormControl>
      <Button type='submit' variant='contained' color='primary' sx={{ mt: 2, width: '25%' }}>
        Login
      </Button>
      <Button variant='outlined' color='primary' sx={{ ml: 1, mt: 2, width: '25%' }}>
        Cancel
      </Button>
    </Box>
  );
};

export default LoginForm;