import { NavLink as RouterLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { pages } from './PageLinks';

const MenuNavMobile = ({ onHandleCloseNavMenu }) => {
  return (
    <>
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
    </>
  )
}

export default MenuNavMobile;