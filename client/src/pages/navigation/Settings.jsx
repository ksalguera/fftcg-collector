import { NavLink as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ManageIcon from '@mui/icons-material/ManageAccountsOutlined';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const Settings = ({ anchorElUser, onHandleOpenUserMenu, onHandleCloseUserMenu }) => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Open settings'>
        <IconButton onClick={onHandleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar variant='rounded' alt='Aemy Sharp' src='#' />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        // id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={onHandleCloseUserMenu}
      > 
        <MenuItem sx={{ cursor: 'default', pointerEvents: 'none', '&:hover': { backgroundColor: 'inherit' } }}>
          <Typography 
            textAlign='center' 
            component={RouterLink} 
            sx={{ 
              textDecoration: 'none',
              '&:visited': { color: 'inherit' }
            }}
          >
            Signed in as TestUser
          </Typography>
        </MenuItem>
        <MenuItem onClick={onHandleCloseUserMenu}>
          <ManageIcon />
          <Typography 
            textAlign='center' 
            component={RouterLink} 
            to='/'
            ml={2}
            sx={{ 
              textDecoration: 'none',
              '&:visited': { color: 'inherit' }
            }}
          >
            Account Settings
          </Typography>
        </MenuItem>
        <MenuItem onClick={onHandleCloseUserMenu}>
          <LogoutIcon />
          <Typography 
            textAlign='center' 
            component={RouterLink} 
            to='/'
            ml={2}
            sx={{ 
              textDecoration: 'none',
              '&:visited': { color: 'inherit' }
            }}
          >
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Settings;