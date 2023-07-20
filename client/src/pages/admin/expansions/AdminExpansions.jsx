import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../../components/PageTitle';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import { AppContext } from '../../../contexts/AppContext';
import columns from './ExpansionColumns';
import ExpansionForm from './ExpansionForm';


const AdminExpansions = () => {
  const { expansions, setExpansions } = useContext(AppContext);
  const [checked, setChecked] = useState(false);
  const [selectionModel, setSelectionModel] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = () => {
    const expansion = expansions.find(expansion => expansion.id === selectionModel[0]);
    navigate(`/browse-sets/${expansion.name}`)
  }
  
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
      <Stack direction='row' justifyContent='space-between'>
        <PageTitle title='Manage Sets' />
        <Stack direction='row' alignItems='baseline'>
          <Typography variant='body2'>Add Set</Typography>
          <Switch checked={checked} onChange={e => setChecked(e.target.checked)}/>
        </Stack>
      </Stack>
      { checked && <ExpansionForm />}
      <Box mb={2} style={{ width: '100%' }}>
        <DataGrid
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            }
          }}
          pageSizeOptions={[5, 10, 25]}
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
         <Button variant='text' disabled={!selectionModel || selectionModel.length === 0} sx={{ mr: 2 }} startIcon={<PageviewIcon />} onClick={handleNavigate}>View Page</Button>
         <Button variant='text' disabled={!selectionModel || selectionModel.length === 0} startIcon={<EditIcon />} onClick={() => console.log(selectionModel)}>Edit</Button>
        </Box>
        <IconButton disabled={!selectionModel || selectionModel.length === 0} color='error' onClick={handleDelete} >
          <DeleteIcon />
        </IconButton>
      </Stack>

    </>
  )
}

export default AdminExpansions;