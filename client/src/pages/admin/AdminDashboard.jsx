import { useState } from 'react';
import Box from '@mui/material/Box';
import VerticalTabPanel from '../../components/VerticalTabPanel';
import AdminTabsMenu from './AdminTabsMenu';
import AdminDashboardSummary from './AdminDashboardSummary';
import AdminExpansions from './expansions/AdminExpansions';
import AdminCards from './cards/AdminCards';
import AdminUsers from './users/AdminUsers';

const AdminDashboard = () => {
  const [value, setValue] = useState(0);
 
  // MUI Tabs requires an event object to be passed first. "_" is required
  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }} className='container'>
      <AdminTabsMenu value={value} handleChange={handleChange} />
      <VerticalTabPanel value={value} index={0}>
        <AdminDashboardSummary />
      </VerticalTabPanel>
      <VerticalTabPanel value={value} index={1}>
        <AdminUsers />
      </VerticalTabPanel>
      <VerticalTabPanel value={value} index={2}>
        <AdminExpansions />
      </VerticalTabPanel>
      <VerticalTabPanel value={value} index={3}>
        <AdminCards />
      </VerticalTabPanel>
    </Box>
  )
}

export default AdminDashboard;