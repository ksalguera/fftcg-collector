import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, FormLabel, FormControl, FormControlLabel, FormGroup } from '@mui/material';

const AdminCardVariants = ({ open, onHandleDialogClose }) => {
  const [formData, setFormData] = useState({
    normal: false,
    normal_foil: false,
    special: false,
    special_foil: false,
    full_art: false,
    full_art_foil: false
  });

  const handleChange = event => setFormData({...formData, [event.target.name]: event.target.checked })
  
  const handleConfirmation = () => {
    console.log(formData)
  } 

  return (
    <Dialog open={open} onClose={onHandleDialogClose}>
      <DialogTitle>Select Card Variants</DialogTitle>
      <DialogContent sx={{ pr: 20 }}>
      <FormControl component='fieldset' variant='standard'>
        <FormGroup>
          <FormControlLabel
            label='Normal'
            control={ <Checkbox checked={formData.normal} onChange={handleChange} name='normal' /> }
          />
          <FormControlLabel
            label='Normal (Foil)'
            control={ <Checkbox checked={formData.normal_foil} onChange={handleChange} name='normal_foil' /> }
          />
          <FormControlLabel
            label='Special'
            control={ <Checkbox checked={formData.special} onChange={handleChange} name='special' /> }
          />
          <FormControlLabel
            label='Special (Foil)'
            control={ <Checkbox checked={formData.special_foil} onChange={handleChange} name='special_foil' /> }
          />
          <FormControlLabel
            label='Full Art'
            control={ <Checkbox checked={formData.full_art} onChange={handleChange} name='full_art' /> }
          />
          <FormControlLabel
            label='Full Art (Foil)'
            control={ <Checkbox checked={formData.full_art_foil} onChange={handleChange} name='full_art_foil' /> }
          />
        </FormGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHandleDialogClose}>Cancel</Button>
        <Button onClick={handleConfirmation} autoFocus>Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AdminCardVariants;