import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import image from '../../assets/CoverImage.png'

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'primary.main', height: '100vh'}}>
      <Stack direction='row' px={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'inherit' }}>
        <Box sx={{ width: '40%' }}>
          <Typography variant='h1' mb={2} sx={{ color: 'white' }}>
            Track Your Final Fantasy TCG Collection and Find Additional Resources
          </Typography>
          <Button variant='outlined' color='secondary' onClick={() => navigate('/login')}>Login Now</Button>
        </Box>
        <img src={image} alt='final fantasy cards' width='60%' />
      </Stack>
    </Box>
  )
}

export default Home;