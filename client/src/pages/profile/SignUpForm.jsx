import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, Link, TextField, Typography } from '@mui/material';
import { UserContext } from '../../contexts/UserContext';

const SignUpForm = () => {
  const initialState = { 
    email: '', 
    password: '',
    password_confirmation: '',
    profile_attributes: { display_name: '' }
   }
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

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
      const res = await fetch('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        setErrors(errorData.errors)
      }
      const data = await res.json();
      console.log(data);
      setUser(data)
      setErrors([])
      setFormData(initialState);
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <Box component='form' sx={{ maxWidth: 400 }} onSubmit={handleSubmit}>
      <Typography variant='h2' mb={2}>Create an Account</Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant='subtitle1' mb={1}>Email Address</Typography>
        <TextField
          // required
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <Typography variant='caption' mb={1}>
          Email addresses must be valid: abc@xyz.com
        </Typography>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant='subtitle1' mb={1}>Password</Typography>
        <TextField
          // required
          type='password'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
        />
        <Typography variant='caption' mb={1}>
          Password must be 6 or more characters
        </Typography>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant='subtitle1' mb={1}>Password Confirmation</Typography>
        <TextField
          // required
          type='password'
          name='password_confirmation'
          value={formData.password_confirmation}
          onChange={handleInputChange}
        />
        <Typography variant='caption' mb={1}>
          Verify Password
        </Typography>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant='subtitle1' mb={1}>Display Name</Typography>
        <TextField
          // required
          name='display_name'
          value={formData.profile_attributes.display_name}
          onChange={handleInputChange}
        />
        <Typography variant='caption' mb={1}>
          Display name must be between 4 and 15 characters
        </Typography>
      </FormControl>
      <Button type='submit' variant='contained' color='primary' sx={{ mt: 2, width: '25%' }}>
        Sign Up
      </Button>
      <Button variant='outlined' color='primary' onClick={() => navigate('/')} sx={{ ml: 1, mt: 2, width: '25%' }}>
        Cancel
      </Button>
      <Typography mt={2}>Already have an account? <Link href='/login'>LOGIN</Link></Typography> 
    </Box>
  );
};

export default SignUpForm;