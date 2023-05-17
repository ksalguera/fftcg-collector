import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';

const CardSearchBar = ({ searchValue, onHandleInputChange, onHandleSubmit, onHandleClear }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Box component='form' onSubmit={onHandleSubmit}>
      <Stack direction={isMobile ? 'column' : 'row'} spacing={2} alignItems='baseline'>
        <FormControl sx={{ width: isMobile ? '100%' : '20%' }}>
          <TextField
            variant='standard'
            placeholder='Keyword'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            value={searchValue}
            onChange={onHandleInputChange}
          />
        </FormControl>
        <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
          <Button type='submit' variant='outlined' disabled={!searchValue} size='small'>Search</Button>
          <Button variant='text' size='small' onClick={onHandleClear}>Clear</Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default CardSearchBar;