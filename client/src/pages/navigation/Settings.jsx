import { useContext } from 'react';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ManageIcon from '@mui/icons-material/ManageAccountsOutlined';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { AppContext } from '../../contexts/AppContext';

const Settings = ({ anchorElUser, onHandleOpenUserMenu, onHandleCloseUserMenu }) => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await fetch('/logout', { method: 'DELETE' });
    if (res.ok) { 
      setUser(null)
      onHandleCloseUserMenu()
      navigate('/')
    }
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Open settings'>
        <IconButton onClick={onHandleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar variant='rounded' alt={user.profile.display_name} src='#' />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
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
            Signed in as {user.profile.display_name}
          </Typography>
        </MenuItem>
        <MenuItem onClick={onHandleCloseUserMenu}>
          <ManageIcon />
          <Typography 
            textAlign='center' 
            component={RouterLink} 
            to='/account-settings'
            ml={2}
            sx={{ 
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            Account Settings
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <LogoutIcon />
          <Typography 
            textAlign='center' 
            component={RouterLink} 
            ml={2}
            sx={{ 
              textDecoration: 'none',
              color: 'inherit'
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