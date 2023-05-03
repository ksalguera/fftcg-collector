import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia, LinearProgress, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/ManageSearch';

const ExpansionCard = ({ name, releaseDate, image }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 700 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant='h3'>{name}</Typography>
          <Typography sx={{ fontSize: 14 }} mb={4} color='text.secondary'>Released: {releaseDate}</Typography>
          <Box mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant='determinate' value={50} sx={{ height: 8, borderRadius: 5 }} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">50%</Typography>
            </Box>
          </Box>
          <Button size='small' variant='outlined' onClick={() => navigate(`/`)} endIcon={<SearchIcon />}>View Details</Button>
        </CardContent>
        <CardMedia sx={{ width: 400 }} image={image} />
      </Box>
    </Card>
  )
}

export default ExpansionCard;