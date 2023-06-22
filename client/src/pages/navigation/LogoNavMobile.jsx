import { useContext } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { AppContext } from '../../contexts/AppContext';

const LogoNavMobile = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      <Typography
        variant='caption'
        noWrap
        component={RouterLink}
        to={!user ? '/' : '/collection-dashboard'}
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'sans-serif',
          fontWeight: 400,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        FFTCG COLLECTOR
      </Typography>
    </>
  )
}

export default LogoNavMobile;