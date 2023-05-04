const columns = [
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'expansion', headerName: 'Set', width: 250, valueGetter: params => params.row.expansion.name },
  { field: 'card_type', headerName: 'Type', width: 100 },
  { field: 'serial', headerName: 'Serial', width: 100 },
  { field: 'card_job', headerName: 'Job', width: 220 },
  { field: 'cost', headerName: 'Cost', width: 100 },
  { field: 'power', headerName: 'Power', width: 100 }
];

export default columns;