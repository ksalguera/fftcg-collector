const columns = [
  { field: 'exansion_name', headerName: 'Set Name', width: 400, valueGetter: params => params.row.card.expansion.name },
  { field: 'name', headerName: 'Card Name', width: 400, valueGetter: params => params.row.card.name },
  { field: 'serial', headerName: 'Serial', width: 275, valueGetter: params => params.row.card.serial },
  { field: 'variant', headerName: 'Variant', width: 275 },
];

export default columns;