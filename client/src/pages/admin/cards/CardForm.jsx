import { useState, useContext } from 'react';
import { Alert, Box, Button, FormControl, Divider, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import CardFormTextfield from './CardFormTextfield';
import { AppContext } from '../../../contexts/AppContext';
import ImageUpload from '../../../components/ImageUpload';

const CardForm = () => {
  const initialState = {
    name: '',
    expansion_id: '',
    card_type: '',
    serial: '',
    card_job: '',
    cost: '',
    power: '',
   }

  const { cards, setCards, expansions } = useContext(AppContext);
  const [formData, setFormData] = useState(initialState);
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSetImage = e => setImage(e.target.files[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const form = new FormData();
    form.append("[name]", formData.name);
    form.append("[expansion_id]", formData.expansion_id);
    form.append("[card_type]", formData.card_type);
    form.append("[serial]", formData.serial);
    form.append("[card_job]", formData.card_job);
    form.append("[cost]", formData.cost);
    form.append("[power]", formData.power);
    form.append("[image]", image);

    try {
      const res = await fetch('/cards', {
        method: 'POST',
        body: form,
      });
      if (!res.ok) {
        const errorData = await res.json();
        setErrors(errorData.errors)
      } else {
        const data = await res.json();
        setErrors(null)
        console.log(data)
        setCards([...cards, data])
        setFormData(initialState)
        setImage(null)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleClear = () => {
    setFormData(initialState)
    setImage(null)
  }
  
  return (
    <Box sx={{ maxWidth: 'inherit' }}>
      <Divider orientation='horizontal' sx={{ my: 2, width: '100%' }} variant='fullWidth' />
      <Box component='form' onSubmit={handleSubmit} sx={{ maxWidth: '100%'}}>
        <Typography variant='h4' mb={2}>Add New Card</Typography>
        <Stack direction='row' alignItems='center'>
          <FormControl fullWidth sx={{ mb: 2, mx: 2, width: '25%' }}>
            <TextField
              required
              variant='standard'
              label='Card Name'
              size='small'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl variant='standard' fullWidth sx={{ mb: 2, mx: 2, width: '15%' }}>
            <InputLabel>Set</InputLabel>
            <Select
              value={formData.expansion_id}
              onChange={handleInputChange}
              name='expansion_id'
            >
              {expansions.map(expansion => (
                <MenuItem key={expansion.id} value={expansion.id}>{expansion.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant='standard' fullWidth sx={{ mb: 2, mx: 2, width: '15%' }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.card_type}
              onChange={handleInputChange}
              name='card_type'
            >
            <MenuItem value='Forward'>Forward</MenuItem>
            <MenuItem value='Backup'>Backup</MenuItem>
            <MenuItem value='Summon'>Summon</MenuItem>
            <MenuItem value='Monster'>Monster</MenuItem>
            </Select>
          </FormControl>
          <CardFormTextfield
            width='10%'
            label='Serial' 
            name='serial' 
            value={formData.serial}
            onHandleInputChange={handleInputChange}
          />
          <ImageUpload image={image} onSetImage={handleSetImage} />
          <Typography variant='caption' ml={2}>{image ? image.name : 'No Image Selected'}</Typography>
        </Stack>
        <Stack direction='row' alignItems='center'>
          <CardFormTextfield
            width='25%'
            label='Job' 
            name='card_job' 
            value={formData.card_job}
            onHandleInputChange={handleInputChange}
          />
          <CardFormTextfield 
            width='15%'
            label='Cost' 
            name='cost' 
            value={formData.cost}
            onHandleInputChange={handleInputChange}
          />
          <CardFormTextfield
            width='20%'
            label='Power' 
            name='power' 
            value={formData.power}
            onHandleInputChange={handleInputChange}
          />
        </Stack>

        { errors && errors.map(error => (<Alert severity='error' key={error}>{error}</Alert>)) }

        <Button type='submit' disabled={!image} variant='contained' color='primary' sx={{ width: '15%', mt: 2 }}>
          Add Card
        </Button>
        <Button variant='text' color='primary' sx={{ width: '10%', ml: 2 }} onClick={handleClear}>
          Clear
        </Button>
      </Box>
      <Divider orientation='horizontal' sx={{ my: 2, width: '100%' }} variant='fullWidth' />
    </Box>
  );
};

export default CardForm;