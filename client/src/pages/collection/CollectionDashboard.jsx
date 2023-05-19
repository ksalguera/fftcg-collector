import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import { AppContext } from '../../contexts/AppContext';
import PageTitle from '../../components/PageTitle';
import CollectionPaper from './CollectionPaper';
import columns from './CollectionColumns';

const CollectionDashboard = () => {
  const { user } = useContext(AppContext);
  const [collection, setCollection] = useState([]);
  const [selectionModel, setSelectionModel] = useState(null);

  useEffect(() => {
    const fetchCollection = async () => {
      const res = await fetch('/collection-stats');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setCollection(json);
    };
    fetchCollection().catch(error => error.message);
  }, []);
  console.log(user)
  return (
    <Box sx={{ width: '100%' }} className='container'>
      <Stack sx={{ width: '100%' }}>
        <PageTitle title='Collection Dashboard' />
        <Grid container spacing={2} mb={2}>
          <Grid xs={12} md={6}>
            <CollectionPaper title='Total Collected Cards' data={collection.total} />
          </Grid>
          <Grid xs={12} md={6}>
            <CollectionPaper title='Total Full Art Foil Cards' data={collection.total_full_art_foil} />
          </Grid>
        </Grid>
        <Box mb={2} sx={{ width: '100%', height: '80%' }}>
          <DataGrid
            slots={{ toolbar: GridToolbar }}
            autoPageSize
            rows={user.profile.collections} 
            columns={columns}
            onRowSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
          />
        </Box>
      </Stack>
    </Box>
  )
}

export default CollectionDashboard;