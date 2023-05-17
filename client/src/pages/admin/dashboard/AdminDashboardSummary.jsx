import { useContext } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { AppContext } from '../../../contexts/AppContext';
import AdminDashboardPaper from './AdminDashboardPaper';

const AdminDashboardSummary = () => {
  const { expansions, cards, users } = useContext(AppContext);

  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <Grid md={4}>
        <AdminDashboardPaper title='Total Sets' data={expansions.length} />
      </Grid>
      <Grid md={4}>
        <AdminDashboardPaper title='Total Cards' data={cards.length} />
      </Grid>
      <Grid md={4}>
        <AdminDashboardPaper title='Total Users' data={users.length} />
      </Grid>
    </Grid>
  )
}

export default AdminDashboardSummary;