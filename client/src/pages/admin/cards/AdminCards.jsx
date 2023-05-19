import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../../components/PageTitle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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

const AdminCards = () => {
  const { cards, setCards } = useContext(AppContext);
  const [checked, setChecked] = useState(false);
  const [selectionModel, setSelectionModel] = useState(null);
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    const card = cards.find(card => card.id === selectionModel[0]);
    navigate(`/browse-cards/${card.serial}`)
  }
  
  const handleCardEdit = () => {
    const card = cards.find(card => card.id === selectionModel[0])
    navigate(`/cards/${card.serial}/edit`)
  }

  const handleDelete = async () => {
    const res = await fetch(`/cards/${selectionModel[0]}`, { method: 'DELETE' });
    if (res.ok) { 
      const updatedCards = cards.filter(expansion => expansion.id !== selectionModel[0]);
      setCards(updatedCards)
      setSelectionModel(null)
    }
  }
  
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
          slots={{ toolbar: GridToolbar }}
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
         <Button variant='text' disabled={!selectionModel || selectionModel.length === 0} sx={{ mr: 2 }} startIcon={<PageviewIcon />} onClick={handleNavigate}>View Page</Button>
         <Button variant='text' disabled={!selectionModel || selectionModel.length === 0} startIcon={<EditIcon />} onClick={handleCardEdit}>Edit</Button>
        </Box>
        <IconButton disabled={!selectionModel || selectionModel.length === 0} color='error' onClick={handleDelete} >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </>
  )
}

export default AdminCards;