import { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/LibraryAdd';
import { AppContext } from '../contexts/AppContext';
import CollectionDialogForm from '../pages/collection/CollectionDialogForm';

const Card = ({ name, serial, image, variants }) => {
  const { user } = useContext(AppContext);
  const hasNormalVariant = variants && variants.some(variant => variant.name === 'Normal');
  const hasNormalFoilVariant = variants && variants.some(variant => variant.name === 'Normal Foil');
  const hasSpecialVariant = variants && variants.some(variant => variant.name === 'Special');
  const hasSpecialFoilVariant = variants && variants.some(variant => variant.name === 'Special Foil');
  const hasFullArtVariant = variants && variants.some(variant => variant.name === 'Full Art');
  const hasFullArtFoilVariant = variants && variants.some(variant => variant.name === 'Full Art Foil');
  const N = hasNormalVariant ? 'N' : null;
  const NF = hasNormalFoilVariant ? 'F' : null;
  const S = hasSpecialVariant ? 'S' : null;
  const SF = hasSpecialFoilVariant ? 'F' : null;
  const FA = hasFullArtVariant ? 'FA' : null;
  const FAF = hasFullArtFoilVariant ? 'FAF' : null;
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' mb={1}>
        <Link component={RouterLink} to='/' color='secondary.dark'>{name}</Link>
        <Typography variant='h5'>{serial}</Typography>
      </Stack>
      <img src={image} style={{ maxWidth: '100%', height: 'auto' }} />
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant='body1'>{N} {NF} {S} {SF} {FA} {FAF}</Typography>
        {user && <IconButton onClick={() => setOpenDialog(true)}><AddIcon fontSize='small'/></IconButton>}
      </Stack>
      <Divider orientation='horizontal' sx={{ mt: 1, width: '100%' }} variant='fullWidth' />
      <CollectionDialogForm 
        open={openDialog} 
        onHandleDialogClose={() => setOpenDialog(false)}
        onConfirmation={() => console.log(variants)}
        variants={variants}
      />
    </Box>
  )
}

export default Card;