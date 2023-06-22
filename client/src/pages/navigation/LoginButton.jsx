import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import LoginIcon from '@mui/icons-material/Login';
import { useMode } from '../../contexts/ThemeContext';

const LoginButton = () => {
  const navigate = useNavigate();
  const [theme] = useMode();
  const mobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box 
      onClick={() => navigate('/login')} 
      sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    >
      { !mobile ? 
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
        : null
      }
      <LoginIcon />
    </Box>
  )
}

export default LoginButton;