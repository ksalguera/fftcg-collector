import { useState, useContext } from 'react';
import { Alert, Box, Button, FormControl, Divider, Stack, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import ExpansionFormTextfield from './ExpansionFormTextfield';
import { AppContext } from '../../../contexts/AppContext';
import ImageUpload from '../../../components/ImageUpload';

const ExpansionForm = () => {
  const { expansions, setExpansions } = useContext(AppContext);
  const [formData, setFormData] = useState({ name: '' });
  const [date, setDateValue] = useState(null);
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSetImage = e => setImage(e.target.files[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const form = new FormData();
    form.append("[name]", formData.name);
    form.append("[release_date]", date ? date.toISOString().substr(0, 10) : '');
    form.append("[image]", image);

    try {
      const res = await fetch('/expansions', {
        method: 'POST',
        body: form,
      });
      if (!res.ok) {
        const errorData = await res.json();
        setErrors(errorData.errors)
      } else {
        const data = await res.json();
        setErrors(null)
        setExpansions([...expansions, data])
        setDateValue(null)
        setFormData({ name: '' })
        setImage(null)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleClear = () => {
    setFormData({ name: '' })
    setDateValue(null)
    setImage(null)
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
                onChange={newValue => setDateValue(newValue)}
              />
            </LocalizationProvider>
          </FormControl>
          <ImageUpload image={image} onSetImage={handleSetImage} />
          <Typography variant='caption' ml={2}>{image ? image.name : 'No Image Selected'}</Typography>
        </Stack>

        { errors && errors.map(error => (<Alert severity='error' key={error}>{error}</Alert>)) }

        <Button type='submit' disabled={!image} variant='contained' color='primary' sx={{ width: '10%', mt: 2 }}>
          Add Set
        </Button>
        <Button variant='text' color='primary' sx={{ width: '10%', mt: 2, ml: 2 }} onClick={handleClear}>
          Clear
        </Button>
      </Box>
      <Divider orientation='horizontal' sx={{ my: 2, width: '100%' }} variant='fullWidth' />
    </Box>
  );
};

export default ExpansionForm;