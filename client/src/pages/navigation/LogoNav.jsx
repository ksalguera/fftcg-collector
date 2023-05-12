import { useContext } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import { AppContext } from '../../contexts/AppContext';
import logo from '../../assets/Logo.png'

const LogoNav = () => {
  const showImage = useMediaQuery('(min-width:960px)'); 
  const { user } = useContext(AppContext);

  return (
    <>
      {showImage && <img src={logo} alt='logo' height='30px' />}
      <Typography
        variant='h4'
        noWrap
        component={RouterLink}
        to={!user ? '/' : '/collection-dashboard'}
        ml={2}
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'sans-serif',
          fontWeight: 700,
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

export default LogoNav;