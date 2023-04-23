import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <Box 
      onClick={() => navigate('/login')} 
      sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    >
      <Typography 
        variant='h5' 
        mr={1} 
        sx={{ 
          fontSize: { md: '.7rem', lg: '0.8rem', xl: '0.9rem' },
          textTransform: 'uppercase'
        }}
      >
        Login
      </Typography>
      <LoginIcon />
    </Box>
  )
}

export default LoginButton;