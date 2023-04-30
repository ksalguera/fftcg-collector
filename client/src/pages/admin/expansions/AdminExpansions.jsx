import { useState, useContext } from 'react';
import PageTitle from '../../../components/PageTitle';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import { AppContext } from '../../../contexts/AppContext';
import columns from './ExpansionColumns';

const AdminExpansions = () => {
  const { expansions, setExpansions } = useContext(AppContext);
  const [selectionModel, setSelectionModel] = useState(null);

  const handleDelete = async () => {
    const res = await fetch(`/expansions/${selectionModel[0]}`, { method: 'DELETE' });
    if (res.ok) { 
      const updatedExpansions = expansions.filter(expansion => expansion.id !== selectionModel[0]);
      setExpansions(updatedExpansions)
      setSelectionModel(null)
    }
  }
  
  return (
    <>
      <Stack direction='row' spacing={2} alignItems='baseline'>
        <PageTitle title='Manage Sets' />
        <Link href='/manage-sets/new'>Add New Expansion</Link> 
      </Stack>

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
         <Button variant='text' disabled={!selectionModel} sx={{ mr: 2 }} startIcon={<PageviewIcon />} onClick={() => console.log(selectionModel[0])}>View Page</Button>
         <Button variant='text' disabled={!selectionModel} startIcon={<EditIcon />} onClick={() => console.log(selectionModel)}>Edit</Button>
        </Box>
        <IconButton disabled={!selectionModel} color='error' onClick={handleDelete} >
          <DeleteIcon />
        </IconButton>
      </Stack>

    </>
  )
}

export default AdminExpansions;