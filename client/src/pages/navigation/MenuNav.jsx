import { NavLink as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { pages } from './PageLinks';

const MenuNav = ({ onHandleCloseNavMenu }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {pages.map((page) => (
      <Typography
        key={page.name}
        component={RouterLink} 
        to={page.link}
        onClick={onHandleCloseNavMenu}
        variant='h6'
        sx={{ 
          mx: 2,
          color: 'white', 
          display: 'block',
          fontSize: { md: '.7rem', lg: '0.8rem', xl: '0.9rem' },
          textTransform: 'uppercase',
          textDecoration: 'none'
        }}
        >
        {page.name}
      </Typography>
    ))}
  </Box>
  )
}

export default MenuNav;