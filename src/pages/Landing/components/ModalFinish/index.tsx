import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';

export interface ModalFinishProps {
  open: boolean;
  closeModal: (value: boolean) => void;
}

export const ModalFinish: React.FC<ModalFinishProps> = ({
  open,
  closeModal,
}) => {
  const handleCloseModal = () => {
    closeModal(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle id="form-dialog-title">Finalizar tickets</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>Ticket</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
