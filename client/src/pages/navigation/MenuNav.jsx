import { NavLink as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import navbarStyle from './MenuNavStyle';

const MenuNav = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Link component={RouterLink} underline='none' sx={navbarStyle} to='/admin-dashboard'>Admin Dashboard</Link>  
      <Link component={RouterLink} underline='none' sx={navbarStyle} to='/collection-dashboard'>Collection</Link>  
      <Link component={RouterLink} underline='none' sx={navbarStyle} to='/'>Sets</Link>  
      <Link component={RouterLink} underline='none' sx={navbarStyle} to='/browse-cards'>Cards</Link>  
      <Link component={RouterLink} underline='none' sx={navbarStyle} to='/'>Resources</Link>
    </Box>
  )
}

export default MenuNav;
