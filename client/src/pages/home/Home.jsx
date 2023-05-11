import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import image from '../../assets/CoverImage.png'

const Home = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', height: '100vh'}}>
      <Stack direction='row' px={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'inherit' }}>
        <Box sx={{ width: '40%' }}>
          <Typography variant='h1' sx={{ color: 'white' }}>
            Track Your Final Fantasy TCG Collection and Find Additional Resources
          </Typography>
        </Box>
        <img src={image} width='60%' />
      </Stack>
    </Box>
  )
}

export default Home;