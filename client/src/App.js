import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { ColorModeContext, useMode } from './contexts/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import NavBar from './pages/navigation/NavBar';
import AdminDashboard from './pages/admin/AdminDashboard';
import CollectionDashboard from './pages/collection/CollectionDashboard';
import CardList from './pages/cards/CardList';
import Home from './pages/home/Home';
import LoginForm from './pages/profile/LoginForm';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={(responsiveFontSizes(theme))}>
        <CssBaseline />
        <NavBar />
        <Box px={2.5} py={2} sx={{ display: 'flex', margin: 'auto', maxWidth: 'xl'}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
            <Route path='/collection-dashboard' element={<CollectionDashboard />} />
            <Route path='/browse-cards' element={<CardList />} />
            <Route path='/login' element={<LoginForm />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
