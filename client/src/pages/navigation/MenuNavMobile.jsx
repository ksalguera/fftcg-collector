import { NavLink as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { pages } from './PageLinks';

const MenuNavMobile = ({ anchorElNav, onHandleOpenNavMenu, onHandleCloseNavMenu }) => {
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
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={onHandleCloseNavMenu}>
            <Typography 
              textAlign='center' 
              component={RouterLink} 
              to={page.link}
              sx={{ 
                textDecoration: 'none',
                '&:visited': { color: 'inherit' }
              }}
            >
              {page.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box> 
  )
}

export default MenuNavMobile;