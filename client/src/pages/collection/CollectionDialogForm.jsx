import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Stack } from '@mui/material';

const CollectionDialogForm = ({ open, onHandleDialogClose, onHandleEditCollection, onSaveCollection, variants, collection }) => {
  return (
    <Dialog open={open} onClose={onHandleDialogClose}>
      <DialogTitle variant='h4'>Add to Collection</DialogTitle>
      <DialogContent>
      <Stack>
        <FormControl component='fieldset' variant='standard'>
          <FormGroup>
            {variants?.length > 0 && variants.map(variant => {
              return (
                <FormControlLabel 
                  key={variant.name} 
                  label={variant.name} 
                  control={
                    <Checkbox
                      checked={collection.includes(variant.name) ? true : false} 
                      value={variant.name} 
                      name={variant.name}
                      onChange={onHandleEditCollection}
                    />
              }/>)
            })}
          </FormGroup>
        </FormControl>
      </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHandleDialogClose}>Cancel</Button>
        <Button onClick={onSaveCollection} autoFocus>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CollectionDialogForm;