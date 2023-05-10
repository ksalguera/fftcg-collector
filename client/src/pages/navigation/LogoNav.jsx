import { NavLink as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import logo from '../../assets/Logo.png'
const LogoNav = () => {
  return (
    <>
     <img src={logo} height='30px' />
      {/* Add Logo Here */}
      <Typography
        variant='h4'
        noWrap
        component={RouterLink}
        to='/'
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