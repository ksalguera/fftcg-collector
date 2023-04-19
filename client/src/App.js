import { Routes, Route } from 'react-router-dom';
import NavBar from './pages/navigation/NavBar';
import AdminDashboard from './pages/admin/AdminDashboard';
import CollectionDashboard from './pages/collection/CollectionDashboard';
import CardList from './pages/cards/CardList';
import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/collection-dashboard' element={<CollectionDashboard />} />
        <Route path='/browse-cards' element={<CardList />} />
      </Routes>
    </>
  )
}

export default App;
