import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia, LinearProgress, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/ManageSearch';
import { useMode } from '../../contexts/ThemeContext';

const ExpansionCard = ({ name, releaseDate, image, stats }) => {
  const navigate = useNavigate();
  const [theme] = useMode();

  return (
    <Card>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant='h3' color={theme.palette.mode === 'light' ? 'secondary.dark' : 'secondary.main'}>{name}</Typography>
          <Typography sx={{ fontSize: 14 }} mb={4} color='text.secondary'>Released: {new Date(releaseDate).toLocaleDateString()}</Typography>
          <Box mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '80%', mr: 1 }}>
              <LinearProgress variant='determinate' value={stats} sx={{ height: 8, borderRadius: 5 }} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant='body2' color="text.secondary">{stats} %</Typography>
            </Box>
          </Box>
          <Button size='small' variant='outlined' onClick={() => navigate(`/browse-sets/${name}`)} endIcon={<SearchIcon />}>View Details</Button>
        </CardContent>
        <CardMedia sx={{ width: '50%'}} image={image} />
      </Box>
    </Card>
  )
}

export default ExpansionCard;