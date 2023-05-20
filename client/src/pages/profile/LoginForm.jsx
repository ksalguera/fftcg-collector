import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Box, Button, FormControl, Link, TextField, Typography } from '@mui/material';
import { AppContext } from '../../contexts/AppContext';

const LoginForm = () => {
  const initialState = { email: '', password: '' };
  const { setUser } = useContext(AppContext);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        setErrors(errorData.errors)
      } else {
        const data = await res.json();
        setUser(data)
        setErrors([])
        setFormData(initialState);
        data.is_admin ? navigate('/admin-dashboard') : navigate('/collection-dashboard')
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box sx={{ flexDirection: 'column' }} className='container'>
      <Box component='form' sx={{ maxWidth: 400 }} onSubmit={handleSubmit}>
        <Typography variant='h2' mb={2}>Login to Your Account</Typography>
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
        { errors && (<Alert severity='error'>{errors}</Alert>) }
        <Button type='submit' variant='contained' color='primary' sx={{ mt: 2, width: '25%' }}>
          Login
        </Button>
        <Button variant='outlined' color='primary' onClick={() => navigate('/')} sx={{ ml: 1, mt: 2, width: '25%' }}>
          Cancel
        </Button>
        <Typography mt={2}>Need an account? <Link href='signup'>SIGN UP</Link></Typography> 
      </Box>
    </Box>
  );
};

export default LoginForm;