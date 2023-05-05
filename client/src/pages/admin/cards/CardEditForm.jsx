import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Alert, Box, Button, CircularProgress, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import { AppContext } from '../../../contexts/AppContext';

const CardEditForm = () => {
  let { serial } = useParams();
  const { expansions, cards, setCards } = useContext(AppContext);
  const [card, setCard] = useState(null);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const initialState = {
    name: '',
    expansion_id: '',
    serial: '',
    card_job: '',
    card_type: '',
    cost: '',
    power: '',
    note: ''
  }

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    const fetchCard = async () => {
      const res = await fetch(`/cards/${serial}`);
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setCard(json);
      setFormData({
        name: json.name,
        expansion_id: json.expansion.id,
        serial: json.serial,
        card_job: json.card_job,
        card_type: json.card_type,
        cost: json.cost,
        power: json.power, 
        note: json.note
      })
    }
    fetchCard()
  }, [serial]);

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    try {
      const res = await fetch(`/cards/${serial}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        setErrors(errorData.errors)
      } else {
        const data = await res.json();
        setErrors(null)
        setCard(data)
        const updatedCards = cards.map(card => card.id === data.id ? data : card)
        setCards(updatedCards)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <> 
      { !card ? <CircularProgress />
      :
      <Box sx={{ width: '100%' }}>
        <Box component='form' sx={{ maxWidth: 400 }} onSubmit={handleSubmit}>
          <Typography variant='h2' mb={2}>Edit {card.name}:{card.serial} Card</Typography>
          <Typography variant='h3' mb={2}>Base Card Information</Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant='subtitle1' mb={1}>Card Name</Typography>
            <TextField
              required
              name='name'
              value={formData.name || ''}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant='subtitle1' mb={1}>Set</Typography>
            <Select
              value={formData.expansion_id }
              onChange={handleInputChange}
              name='expansion_id'
            >
              {expansions.map(expansion => (
                <MenuItem key={expansion.id} value={expansion.id}>{expansion.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant='subtitle1' mb={1}>Card Type</Typography>
            <Select
              value={formData.card_type || ''}
              onChange={handleInputChange}
              name='card_type'
            >
            <MenuItem value='Forward'>Forward</MenuItem>
            <MenuItem value='Backup'>Backup</MenuItem>
            <MenuItem value='Summon'>Summon</MenuItem>
            <MenuItem value='Monster'>Monster</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant='subtitle1' mb={1}>Serial</Typography>
            <TextField
              required
              name='serial'
              value={formData.serial || ''}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant='subtitle1' mb={1}>Job</Typography>
            <TextField
              required
              name='card_job'
              value={formData.card_job|| ''}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant='subtitle1' mb={1}>Cost</Typography>
            <TextField
              required
              name='cost'
              value={formData.cost || ''}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant='subtitle1' mb={1}>Power</Typography>
            <TextField
              required
              name='power'
              value={formData.power || ''}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant='subtitle1' mb={1}>Note</Typography>
            <TextField
              name='text'
              value={formData.text || ''}
              onChange={handleInputChange}
            />
          </FormControl>
          { errors && (<Alert severity='error'>{errors}</Alert>) }
          <Button type='submit' variant='contained' color='primary' sx={{ mt: 2 }}>
            Update Card Information
          </Button>
        </Box>
      </Box>
      }
    </>

  )
}

export default CardEditForm;