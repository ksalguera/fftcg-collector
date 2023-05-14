import { Checkbox, FormControl, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';

const AdminCardVariants = ({ variants, onEditVariants }) => {
  return (
    <Stack>
      <Typography variant='h3' mb={2}>Card Variants</Typography>
      <FormControl component='fieldset' variant='standard'>
        <FormGroup>
          <FormControlLabel
            label='Normal'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Normal')} onChange={onEditVariants} value={1} name='Normal' /> }
          />
          <FormControlLabel
            label='Normal (Foil)'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Normal Foil') ? true : false} onChange={onEditVariants} value={2} name='Normal Foil' /> }
          />
          <FormControlLabel
            label='Special'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Special') ? true : false} onChange={onEditVariants} value={3} name='Special' /> }
          />
          <FormControlLabel
            label='Special (Foil)'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Special Foil') ? true : false} onChange={onEditVariants} value={4} name='Special Foil' /> }
          />
          <FormControlLabel
            label='Full Art'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Full Art') ? true : false} onChange={onEditVariants} value={5} name='Full Art' /> }
          />
          <FormControlLabel
            label='Full Art (Foil)'
            control={ <Checkbox checked={variants?.length > 0 && variants.includes('Full Art Foil') ? true : false} onChange={onEditVariants} value={6} name='Full Art Foil' /> }
          />
        </FormGroup>
      </FormControl>
    </Stack>
  )
}

export default AdminCardVariants;