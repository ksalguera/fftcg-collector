import { useState, useContext } from 'react';
import PageTitle from '../../../components/PageTitle';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import { AppContext } from '../../../contexts/AppContext';

const AdminSets = () => {
  const { expansions } = useContext(AppContext);
  const [selectionModel, setSelectionModel] = useState(null);
  
  const columns = [
    { field: 'name', headerName: 'Set Name', width: 150 },
    { field: 'release_date', headerName: 'Release Date', width: 150 },
    { field: 'total_cards', headerName: 'Total Cards', width: 150 },
    { field: 'normal', headerName: 'Normal', width: 120 },
    { field: 'normal_foil', headerName: 'Normal (Foil)', width: 120 },
    { field: 'special', headerName: 'Special', width: 120 },
    { field: 'special_foil', headerName: 'Special (Foil)', width: 120 },
    { field: 'full_art', headerName: 'Full Art', width: 120 },
    { field: 'full_art_foil', headerName: 'Full Art (Foil)', width: 120 },
  ];

  return (
    <>
      <PageTitle title='Manage Sets' />
      <Box mb={2} style={{ width: '100%' }}>
        <DataGrid 
          rows={expansions} 
          columns={columns}
          onRowSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
        />
      </Box>
      <Stack direction='row' justifyContent='space-between'>
        <Box>
         <Button variant='text' disabled={!selectionModel} sx={{ mr: 2 }} startIcon={<PageviewIcon />} onClick={() => console.log(selectionModel)}>View Page</Button>
         <Button variant='text' disabled={!selectionModel} startIcon={<EditIcon />} onClick={() => console.log(selectionModel)}>Edit</Button>
        </Box>
        <IconButton disabled={!selectionModel} color='error' >
          <DeleteIcon />
        </IconButton>
      </Stack>

    </>
  )
}

export default AdminSets;