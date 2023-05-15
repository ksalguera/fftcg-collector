import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/CameraAlt';

const ImageUpload = ({ image, onSetImage }) => {
  return (
    <Button variant='outlined' component='label' endIcon={<CameraIcon />}>
        Upload
      <input 
        hidden key={image} 
        accept='image/*' 
        multiple type='file' 
        onChange={onSetImage} 
      />
    </Button>
  )
}

export default ImageUpload;