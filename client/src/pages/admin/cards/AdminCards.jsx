import { useState, useContext } from 'react';
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
import columns from './CardColumns';
import CardForm from './CardForm';
import AdminCardVariants from './AdminCardVariants';

const AdminCards = () => {
  const { cards, setCards } = useContext(AppContext);
  const [checked, setChecked] = useState(false);
  const [selectionModel, setSelectionModel] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDelete = async () => {
    const res = await fetch(`/cards/${selectionModel[0]}`, { method: 'DELETE' });
    if (res.ok) { 
      const updatedCards = cards.filter(expansion => expansion.id !== selectionModel[0]);
      setCards(updatedCards)
      setSelectionModel(null)
    }
  }

  const handleDialogClose = () => setOpenDialog(false);

  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <PageTitle title='Manage Cards' />
        <Stack direction='row' alignItems='baseline'>
          <Typography variant='body2'>Add Card</Typography>
          <Switch checked={checked} onChange={e => setChecked(e.target.checked)}/>
        </Stack>
      </Stack>
      { checked && <CardForm />}
      <Box mb={2} style={{ width: '100%' }}>
        <DataGrid
          autoHeight
          pageSize={10}
          pageSizeOptions={[10, 25, 100]}
          rows={cards} 
          columns={columns}
          onRowSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
        />
      </Box>
      <Stack direction='row' justifyContent='space-between'>
        <Box>
         <Button variant='text' disabled={!selectionModel || selectionModel.length === 0} sx={{ mr: 2 }} startIcon={<PageviewIcon />} onClick={() => console.log(selectionModel[0])}>View Page</Button>
         <Button variant='text' disabled={!selectionModel || selectionModel.length === 0} startIcon={<EditIcon />} onClick={() => setOpenDialog(true)}>Edit</Button>
        </Box>
        <IconButton disabled={!selectionModel || selectionModel.length === 0} color='error' onClick={handleDelete} >
          <DeleteIcon />
        </IconButton>
      </Stack>
      <AdminCardVariants open={openDialog} onHandleDialogClose={handleDialogClose} />
    </>
  )
}

export default AdminCards;