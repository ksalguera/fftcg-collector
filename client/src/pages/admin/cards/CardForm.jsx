import { useState, useContext } from 'react';
import { Alert, Box, Button, FormControl, Divider, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import CardFormTextfield from './CardFormTextfield';
import { AppContext } from '../../../contexts/AppContext';
import ImageUpload from '../../../components/ImageUpload';
import CardFormVariants from './CardFormVariants';

const CardForm = () => {
  const initialState = {
    name: '',
    expansion_id: '',
    card_type: '',
    serial: '',
    card_job: '',
    cost: '',
    power: '',
    variant_ids: []
   }

  const { cards, setCards, expansions } = useContext(AppContext);
  const [formData, setFormData] = useState(initialState);
  const [variants, setVariants] = useState([]);
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleEditVariant = e => {
    const variantId= parseInt(e.target.value, 10);
    if (variants?.includes(variantId)) {
      const updatedVariants = variants.filter(id => id !== variantId)
      console.log(updatedVariants)
      setVariants(updatedVariants)
    } else {
      setVariants([...variants, variantId])
    }

    if (formData.variant_ids?.includes(variantId)) {
      const updatedIds = formData.variant_ids.filter(id => id !== variantId)
      setFormData({...formData, variant_ids: updatedIds})
    } else {
      setFormData({...formData, variant_ids: [...formData.variant_ids, variantId]})
    }
  }

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
    formData.variant_ids.forEach((variantId) => {
      form.append("variant_ids[]", variantId);
    });
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
        setCards([...cards, data])
        setFormData(initialState)
        setVariants([])
        setImage(null)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleClear = () => {
    setFormData(initialState)
    setVariants([])
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
            width='10%'
            label='Cost' 
            name='cost' 
            value={formData.cost}
            onHandleInputChange={handleInputChange}
          />
          <CardFormTextfield
            width='15%'
            label='Power' 
            name='power' 
            value={formData.power}
            onHandleInputChange={handleInputChange}
          />
          <CardFormVariants variants={variants} onEditVariant={handleEditVariant} />
        </Stack>

        { errors && errors.map(error => (<Alert severity='error' key={error}>{error}</Alert>)) }

        <Button type='submit' disabled={!image} variant='contained' color='primary' sx={{ width: '15%', mt: 2 }}>
          Add Card
        </Button>
        <Button variant='text' color='primary' sx={{ width: '10%', mt: 2, ml: 2 }} onClick={handleClear}>
          Clear
        </Button>
      </Box>
      <Divider orientation='horizontal' sx={{ my: 2, width: '100%' }} variant='fullWidth' />
    </Box>
  );
};

export default CardForm;