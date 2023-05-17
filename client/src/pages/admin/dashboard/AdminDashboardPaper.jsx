import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useMode } from '../../../contexts/ThemeContext';

const AdminDashboardPaper = ({ title, data }) => {
  const [theme] = useMode();

  return (
    <Paper 
      sx={{ 
        bgcolor: theme.palette.neutral.dark, 
        display: 'flex', 
        justifyContent: 'center', 
        textAlign: 'center',
        p: 4
      }}
    >
      <Typography variant='h2' color='secondary'>{title}<br />{data}</Typography>
    </Paper>
  )
}

export default AdminDashboardPaper;