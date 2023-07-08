import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia, LinearProgress, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/ManageSearch';
import { useMode } from '../../contexts/ThemeContext';
import { AppContext } from '../../contexts/AppContext';

const ExpansionCard = ({ name, releaseDate, image, stats }) => {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);
  const [theme] = useMode();
  const mobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Card>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant='h3' color={theme.palette.mode === 'light' ? 'secondary.dark' : 'secondary.main'}>{name}</Typography>
          <Typography sx={{ fontSize: 14 }} mb={4} color='text.secondary'>Released: {new Date(releaseDate).toLocaleDateString()}</Typography>
          { user && 
          <Box mb={2} sx={{ display: mobile ? 'block' : 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '80%', mr: 1 }}>
              <LinearProgress variant='determinate' value={stats} sx={{ height: 8, borderRadius: 5, width: mobile ? '100%' : 'auto' }} />
            </Box>
            <Box sx={{ minWidth: 35, mt: mobile ? 1 : 0 }}>
              <Typography variant='body2' color='text.secondary'>{stats} %</Typography>
            </Box>
          </Box> }
          <Button size='small' variant='outlined' onClick={() => navigate(`/sets/${name.toLowerCase()}`)} endIcon={<SearchIcon />}>View Details</Button>
        </CardContent>
        <CardMedia sx={{ width: '50%' }} image={image} />
      </Box>
    </Card>
  )
}

export default ExpansionCard;