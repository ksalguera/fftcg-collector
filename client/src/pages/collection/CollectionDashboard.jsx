import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { AppContext } from '../../contexts/AppContext';
import PageTitle from '../../components/PageTitle';

const CollectionDashboard = () => {
  const { user } = useContext(AppContext);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box className='container'>
      <Stack sx={{ width: '100%' }}>
      <PageTitle title='Collection Dashboard' />
        <Grid container spacing={2}>
          <Grid>
            <Item> Total Collected Cards {user.profile.collections.length}</Item>
          </Grid>
          <Grid>
            <Item> Total Collected Cards {user.profile.collections.length}</Item>
          </Grid>
        </Grid>
      </Stack>

    </Box>
  )
}

export default CollectionDashboard;