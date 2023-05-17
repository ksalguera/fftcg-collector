const columns = [
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'display_name', headerName: 'Display Name', width: 200, valueGetter: params => params.row.profile.display_name },
  { field: 'is_admin', headerName: 'Admin', width: 100 },
];

export default columns;