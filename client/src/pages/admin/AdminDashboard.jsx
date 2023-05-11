import { useState } from 'react';
import Box from '@mui/material/Box';
import VerticalTabPanel from '../../components/VerticalTabPanel';
import AdminTabsMenu from './AdminTabsMenu';
import AdminDashboardSummary from './AdminDashboardSummary';
import AdminExpansions from './expansions/AdminExpansions';
import AdminCards from './cards/AdminCards';

const AdminDashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }} className='container'>
      <AdminTabsMenu value={value} handleChange={handleChange} />
      <VerticalTabPanel value={value} index={0}>
        <AdminDashboardSummary />
      </VerticalTabPanel>
      <VerticalTabPanel value={value} index={1}>
        Item Two
      </VerticalTabPanel>
      <VerticalTabPanel value={value} index={2}>
        <AdminExpansions />
      </VerticalTabPanel>
      <VerticalTabPanel value={value} index={3}>
        <AdminCards />
      </VerticalTabPanel>
    </Box>
  );
}

export default AdminDashboard;