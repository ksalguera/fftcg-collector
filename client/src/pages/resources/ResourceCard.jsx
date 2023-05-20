import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useMode }from '../../contexts/ThemeContext';

const ResourceCard = ({ title, description, link }) => {
  const [theme] = useMode();

  return (
    <Grid xs={12} sm={12} md={6}>
      <Typography variant='h3' sx={{ color: theme.palette.mode === 'light' ? 'secondary.dark' : 'secondary.main' }} mb={2}>{title}</Typography>
      <Typography variant='body1' mb={2}>{description}</Typography>
      <Button 
        variant='outlined' 
        endIcon={<OpenInNewIcon />} 
        sx={{ mb: 2 }} href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn More
      </Button>
    </Grid>
  )
}

export default ResourceCard;