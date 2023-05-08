import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/LibraryAdd';
import { AppContext } from '../contexts/AppContext';

const Card = ({ name, serial, image, variants }) => {
  const { user } = useContext(AppContext);
  const hasNormalVariant = variants && variants.some(variant => variant.name === 'normal');
  const hasNormalFoilVariant = variants && variants.some(variant => variant.name === 'normal_foil');
  const hasSpecialVariant = variants && variants.some(variant => variant.name === 'special');
  const hasSpecialFoilVariant = variants && variants.some(variant => variant.name === 'special_foil');
  const hasFullArtVariant = variants && variants.some(variant => variant.name === 'full_art');
  const hasFullArtFoilVariant = variants && variants.some(variant => variant.name === 'full_art_foil');
  const N = hasNormalVariant ? 'N' : null;
  const NF = hasNormalFoilVariant ? 'F' : null;
  const S = hasSpecialVariant ? 'S' : null;
  const SF = hasSpecialFoilVariant ? 'F' : null;
  const FA = hasFullArtVariant ? 'FA' : null;
  const FAF = hasFullArtFoilVariant ? 'FAF' : null;

  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' mb={1}>
        <Link component={RouterLink} to='/' color='secondary.main'>{name}</Link>
        {/* <Typography variant='h5'>{name}</Typography> */}
        <Typography variant='h5'>{serial}</Typography>
      </Stack>
      <img src={image} style={{ maxWidth: '100%', height: 'auto' }} />
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant='body1'>{N} {NF} {S} {SF} {FA} {FAF}</Typography>
        {user && <IconButton><AddIcon fontSize='small' /></IconButton>}
      </Stack>
  
      <Divider orientation='horizontal' sx={{ mt: 1, width: '100%' }} variant='fullWidth' />
    </Box>
  )
}

export default Card;