import { useContext, useState } from 'react';
import PageTitle from '../../../components/PageTitle';
import { DataGrid } from '@mui/x-data-grid';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import columns from './UserColumns';
import { AppContext } from '../../../contexts/AppContext';

const AdminUsers = () => {
  const { users, setUsers } = useContext(AppContext)
  const [selectionModel, setSelectionModel] = useState(null);
  const [errors, setErrors] = useState(null);
  
  const handleDelete = async () => {
    const res = await fetch(`/admin/users/${selectionModel[0]}`, { method: 'DELETE' });
    if (!res.ok) {
      const errorData = await res.json();
      setErrors(errorData.errors)
    } else {
      const updatedUsers = users.filter(user => user.id !== selectionModel[0]);
      setUsers(updatedUsers)
      setSelectionModel(null)
    }
  }

  return (
    <>
      <PageTitle title='Manage Users' />
      <Box mb={2} sx={{ width: '100%' }}>
        <DataGrid
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            }
          }}
          pageSizeOptions={[5, 10, 25]}
          rows={users} 
          columns={columns}
          onRowSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
        />
      </Box>
    <Stack direction='row' justifyContent='space-between'>
      <IconButton disabled={!selectionModel || selectionModel.length === 0} color='error' onClick={handleDelete} >
        <DeleteIcon />
      </IconButton>
    </Stack>
    { errors && errors.map(error => (<Alert severity='error' key={error}>{error}</Alert>)) }
  </>
  )
}

export default AdminUsers;