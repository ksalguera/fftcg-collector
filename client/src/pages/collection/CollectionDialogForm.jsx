import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';

const DialogGeneral = ({ open, onHandleDialogClose, onConfirmation, title, variants }) => {
  console.log(variants)
  return (
    <Dialog open={open} onClose={onHandleDialogClose}>
      <DialogTitle variant='h4'>{title}</DialogTitle>
      <DialogContent>
      <Stack>
        <FormControl component='fieldset' variant='standard'>
          <FormGroup>
            {variants?.length > 0 && variants.map(variant => {
              return (
                <FormControlLabel key={variant.name} label={variant.name} control={ <Checkbox value={variant.name} name={variant.name} /> } />
              )
            })}
            {/* <FormControlLabel
              label='Normal'
              control={ <Checkbox checked={variants?.length > 0 && variants.includes('normal')} onChange={onEditVariants} value={1} name='normal' /> }
            />
            <FormControlLabel
              label='Normal (Foil)'
              control={ <Checkbox checked={variants?.length > 0 && variants.includes('normal_foil') ? true : false} onChange={onEditVariants} value={2} name='normal_foil' /> }
            />
            <FormControlLabel
              label='Special'
              control={ <Checkbox checked={variants?.length > 0 && variants.includes('special') ? true : false} onChange={onEditVariants} value={3} name='special' /> }
            />
            <FormControlLabel
              label='Special (Foil)'
              control={ <Checkbox checked={variants?.length > 0 && variants.includes('special_foil') ? true : false} onChange={onEditVariants} value={4} name='special_foil' /> }
            />
            <FormControlLabel
              label='Full Art'
              control={ <Checkbox checked={variants?.length > 0 && variants.includes('full_art') ? true : false} onChange={onEditVariants} value={5} name='full_art' /> }
            />
            <FormControlLabel
              label='Full Art (Foil)'
              control={ <Checkbox checked={variants?.length > 0 && variants.includes('full_art_foil') ? true : false} onChange={onEditVariants} value={6} name='full_art_foil' /> }
            /> */}
          </FormGroup>
        </FormControl>
      </Stack>
        {/* <DialogContentText>{message}</DialogContentText> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onHandleDialogClose}>Cancel</Button>
        <Button onClick={onConfirmation} autoFocus>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogGeneral;