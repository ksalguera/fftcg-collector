import { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import LogoNav from './LogoNav';
import MenuNavMobile from './MenuNavMobile';
import MenuNav from './MenuNav';
import Settings from './Settings';
import LogoNavMobile from './LogoNavMobile';
import LoginButton from './LoginButton';
import { AppContext }from '../../contexts/AppContext';

const NavBar = () => {
  const { user } = useContext(AppContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // layout: Logo > Menu > Settings
  // mobile layout: Hamburger Menu > Logo > Settings

  return (
    <AppBar position='static' elevation={0}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <LogoNav />
          <MenuNavMobile anchorElNav={anchorElNav} onHandleOpenNavMenu={handleOpenNavMenu} onHandleCloseNavMenu={handleCloseNavMenu}/>
          <LogoNavMobile />
          <MenuNav />
          {
            !user
            ? <LoginButton />
            : <Settings anchorElUser={anchorElUser} onHandleOpenUserMenu={handleOpenUserMenu} onHandleCloseUserMenu={handleCloseUserMenu} />
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;