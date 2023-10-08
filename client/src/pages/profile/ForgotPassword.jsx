import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Box, Button, FormControl, TextField, Typography } from '@mui/material';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // try {
    //   const res = await fetch('/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (!res.ok) {
    //     const errorData = await res.json();
    //     setErrors(errorData.errors)
    //   } else {
    //     const data = await res.json();
    //     setErrors([])
    //     setFormData({ email: '' });
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <Box sx={{ width: '100%', flexDirection: 'column' }} className='container'>
      <Box component='form' sx={{ maxWidth: 400 }} onSubmit={handleSubmit}>
        <Typography variant='h2' mb={2}>Forgot Password</Typography>
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
        { errors && (<Alert severity='error'>{errors}</Alert>) }
        <Button type='submit' variant='contained' color='primary' sx={{ mt: 2, width: '25%' }}>
          Reset
        </Button>
        <Button variant='outlined' color='primary' onClick={() => navigate('/login')} sx={{ ml: 1, mt: 2, width: '25%' }}>
          Cancel
        </Button> 
        <Alert severity='error' sx={{ mt: 2 }}>Forgot Password Coming in December Release</Alert>
      </Box>
    </Box>
  )
}

export default ForgotPassword;