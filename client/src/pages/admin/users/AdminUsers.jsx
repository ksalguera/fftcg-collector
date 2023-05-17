import { useEffect, useState } from 'react';
import PageTitle from '../../../components/PageTitle';
import { DataGrid } from '@mui/x-data-grid';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import columns from './UserColumns';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectionModel, setSelectionModel] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/all-users');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setUsers(json);
    };
    fetchUsers().catch(error => error.message);
  }, []);
  
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
          autoHeight
          pageSize={10}
          pageSizeOptions={[10, 25, 100]}
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