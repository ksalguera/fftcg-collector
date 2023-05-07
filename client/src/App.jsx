import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import { ColorModeContext, useMode } from './contexts/ThemeContext';
import { AppContextProvider } from './contexts/AppContext';

import NavBar from './pages/navigation/NavBar';
import AdminDashboard from './pages/admin/AdminDashboard';
import CollectionDashboard from './pages/collection/CollectionDashboard';
import CardList from './pages/cards/CardList';
import Home from './pages/home/Home';
import LoginForm from './pages/profile/LoginForm';
import SignUpForm from './pages/profile/SignUpForm';
import AccountSettings from './pages/profile/AccountSettings';
import PrivateRoutes from './components/PrivateRoutes';
import ExpansionList from './pages/expansions/ExpansionList';
import CardEditForm from './pages/admin/cards/CardEditForm';
import Footer from './pages/resources/Footer';
import ExpansionDetail from './pages/expansions/ExpansionDetail';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={(responsiveFontSizes(theme))}>
        <CssBaseline />
        <AppContextProvider>
          <NavBar />
          <Box px={2.5} py={2} sx={{ display: 'flex', flexDirection: 'column', margin: 'auto', maxWidth: 'xl'}}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/browse-sets' element={<ExpansionList />} />
              <Route path='/browse-sets/:name' element={<ExpansionDetail />} />
              <Route path='/browse-cards' element={<CardList />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/signup' element={<SignUpForm />} />
              <Route element={<PrivateRoutes />}>
                <Route path='/admin-dashboard' element={<AdminDashboard />} />
                <Route path='/cards/:serial/edit' element={<CardEditForm />} />
                <Route path='/collection-dashboard' element={<CollectionDashboard />} />
                <Route path='/account-settings' element={<AccountSettings />} />
              </Route>
            </Routes>
            <Footer />
          </Box>
        </AppContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
