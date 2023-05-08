import { useContext } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppContext}  from '../../contexts/AppContext';
import navbarStyle from './MenuNavStyleMobile';

const MenuNavMobile = ({ anchorElNav, onHandleOpenNavMenu, onHandleCloseNavMenu }) => {
  const { user } = useContext(AppContext);

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={onHandleOpenNavMenu}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={onHandleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {(user && user.is_admin) && 
          <MenuItem onClick={onHandleCloseNavMenu}>
            <Link component={RouterLink} underline='none' sx={navbarStyle} to='/admin-dashboard'>Admin Dashboard</Link>
          </MenuItem>
        }
        {user &&  
          <MenuItem onClick={onHandleCloseNavMenu}>
            <Link component={RouterLink} underline='none' sx={navbarStyle} to='/collection-dashboard'>Collection</Link>
          </MenuItem>
        }
        <MenuItem onClick={onHandleCloseNavMenu}>
          <Link component={RouterLink} underline='none' sx={navbarStyle} to='/browse-sets'>Sets</Link>
        </MenuItem>
        <MenuItem onClick={onHandleCloseNavMenu}>
          <Link component={RouterLink} underline='none' sx={navbarStyle} to='/browse-cards'>Cards</Link>
        </MenuItem>
        <MenuItem onClick={onHandleCloseNavMenu}>
          <Link component={RouterLink} underline='none' sx={navbarStyle} to='/'>Resources</Link>
        </MenuItem>
      </Menu>
    </Box> 
  )
}

export default MenuNavMobile;