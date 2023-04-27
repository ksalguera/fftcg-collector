import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogGeneral = ({ open, onHandleDialogClose, onConfirmation, title, message }) => {
  return (
    <Dialog open={open} onClose={onHandleDialogClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHandleDialogClose}>Cancel</Button>
        <Button onClick={onConfirmation} autoFocus>Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogGeneral;