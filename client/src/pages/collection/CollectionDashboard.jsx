import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import PageTitle from '../../components/PageTitle';

const CollectionDashboard = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const fetchCollection = async () => {
      const res = await fetch('/collection-stats');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setCollection(json);
    };
    fetchCollection().catch(error => error.message);
  }, []);

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
            <Item> Total Collected Cards {collection.total_collected}</Item>
          </Grid>
          <Grid>
            <Item>Test</Item>
          </Grid>
        </Grid>
      </Stack>

    </Box>
  )
}

export default CollectionDashboard;