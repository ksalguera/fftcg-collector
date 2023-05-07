import { useState, useContext } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { AppContext } from '../../../contexts/AppContext';

const CardImageForm = ({ image, serial, onImageChange }) => {
  const { cards, setCards } = useContext(AppContext);
  const [newImage, setNewImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  const handleSubmit = async () => {
    const form = new FormData();
    form.append("[image]", newImage);
   
    try {
      const res = await fetch(`/cards/${serial}`, {
        method: 'PATCH',
        body: form,
      });
      if (!res.ok) {
        const errorData = await res.json();
      } else {
        const data = await res.json();
        const updatedCards = cards.map(card => card.serial === data.serial ? data : card)
        setCards(updatedCards)
        setNewImage(null)
        onImageChange(data)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Stack>
      <Typography variant='h3' mb={2}>Card Image</Typography>
      <img src={image} width='335px' height='470px' />
      <Button component='label' variant='contained' color='primary' sx={{ mt: 2 }} startIcon={<PhotoCameraIcon />}>
        Upload Image
        <input hidden accept='image/*' multiple type='file' onChange={(e) => setNewImage(e.target.files[0])} />
      </Button>
      { newImage && (
        <>
          <Typography variant='caption' mt={2}>File Name: {newImage.name}</Typography>
          <Button variant='contained' color='primary' sx={{ mt: 2 }} onClick={handleSubmit}>
            Save Changes
          </Button>
        </>
      )} 
    </Stack>
  )
}

export default CardImageForm;