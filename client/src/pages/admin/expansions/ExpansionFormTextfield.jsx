import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const ExpansionFormTextfield = ({ label, name, value, onHandleInputChange }) => {
  return (
    <FormControl fullWidth sx={{ mb: 2, mx: 2, width: '10%' }}>
      <TextField
        // required
        variant='standard'
        label={label}
        size='small'
        name={name}
        value={value}
        onChange={onHandleInputChange}
      />
    </FormControl>
  )
}

export default ExpansionFormTextfield;