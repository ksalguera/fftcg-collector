import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Alert, Box, Button, FormControl, Divider, Stack, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import ExpansionFormTextfield from './ExpansionFormTextfield';

const ExpansionForm = () => {
  const initialState = {
    name: '',
    release_date: '',
    normal: '',
    normal_foil: '',
    special: '',
    special_foil: '',
    full_art: '',
    full_art_foil: '',
    image: null
   }

  const [formData, setFormData] = useState(initialState);
  const [date, setDateValue] = useState('');
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = e => {
    if (e.target.name === 'image') {
      setFormData({...formData, [e.target.name]: e.target.files[0]});
    } else {
      setFormData({...formData, 
      [e.target.name]: e.target.value,
      ['release_date']: date
    });
    }

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log(formData)
    // try {
    //   const res = await fetch('/users', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (!res.ok) {
    //     const errorData = await res.json();
    //     setErrors(errorData.errors)
    //   } else {
    //     const data = await res.json();
    //     setErrors(null)
    //     setFormData(initialState);
    //     navigate('/')
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  }
  
  return (
    <Box sx={{ maxWidth: 'inherit' }}>
      <Divider orientation='horizontal' sx={{ my: 2, width: '100%' }} variant='fullWidth' />
      <Box component='form' onSubmit={handleSubmit} sx={{ maxWidth: '90%'}}>
        <Typography variant='h4' mb={2}>Add New Set</Typography>
        <Stack direction='row' alignItems='center'>
          <FormControl fullWidth sx={{ mb: 2, mx: 2, width: '25%' }}>
            <TextField
              // required
              variant='standard'
              label='Set Name'
              size='small'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2, mx: 2, width: '15%' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField 
                variant='standard' 
                label='Release Date' 
                size='small'
                value={date}
                onChange={newValue => setDateValue(newValue.toISOString().substr(0, 10))}
              />
            </LocalizationProvider>
          </FormControl>
          <Button variant='outlined' component='label'>
            Upload Set Image
            <input hidden accept='image/*' multiple type='file' name='image' onChange={handleInputChange} />
          </Button>  
        </Stack>
        <Stack direction='row' alignItems='center'>
          <ExpansionFormTextfield 
            label='# Normal Cards' 
            name='normal' 
            value={formData.normal}
            onHandleInputChange={handleInputChange}
          />
          <ExpansionFormTextfield 
            label='# Normal (Foil)' 
            name='normal_foil' 
            value={formData.normal_foil}
            onHandleInputChange={handleInputChange}
          />
          <ExpansionFormTextfield  
            label='# Special Cards' 
            name='special' 
            value={formData.special}
            onHandleInputChange={handleInputChange}
          />
          <ExpansionFormTextfield 
            label='# Special (Foil)' 
            name='special_foil' 
            value={formData.special_foil}
            onHandleInputChange={handleInputChange}
          />
          <ExpansionFormTextfield 
            label='# Full Art (Non-Foil)' 
            name='full_art' 
            value={formData.full_art}
            onHandleInputChange={handleInputChange}
          />
          <ExpansionFormTextfield  
            label='# Full Art (Foil)' 
            name='full_art_foil' 
            value={formData.full_art_foil}
            onHandleInputChange={handleInputChange}
          />
        </Stack>

        { errors && errors.map(error => (<Alert severity='error' key={error}>{error}</Alert>)) }

        <Button type='submit' variant='contained' color='primary' sx={{ width: '10%' }}>
          Add Set
        </Button>
      </Box>
      <Divider orientation='horizontal' sx={{ my: 2, width: '100%' }} variant='fullWidth' />
    </Box>
  );
};

export default ExpansionForm;