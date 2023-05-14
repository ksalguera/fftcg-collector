import { Checkbox, FormControl, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';

const AdminCardVariants = ({ variants, onEditVariants }) => {
  return (
    <Stack>
      <Typography variant='h3' mb={2}>Card Variants</Typography>
      <FormControl component='fieldset' variant='standard'>
        <FormGroup>
          <FormControlLabel
            label='Normal'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Normal')} onChange={onEditVariants} value={1} name='normal' /> }
          />
          <FormControlLabel
            label='Normal (Foil)'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Normal Foil') ? true : false} onChange={onEditVariants} value={2} name='normal_foil' /> }
          />
          <FormControlLabel
            label='Special'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Special') ? true : false} onChange={onEditVariants} value={3} name='special' /> }
          />
          <FormControlLabel
            label='Special (Foil)'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Special Foil') ? true : false} onChange={onEditVariants} value={4} name='special_foil' /> }
          />
          <FormControlLabel
            label='Full Art'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Full Art') ? true : false} onChange={onEditVariants} value={5} name='full_art' /> }
          />
          <FormControlLabel
            label='Full Art (Foil)'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Full Art Foil') ? true : false} onChange={onEditVariants} value={6} name='full_art_foil' /> }
          />
        </FormGroup>
      </FormControl>
    </Stack>
  )
}

export default AdminCardVariants;