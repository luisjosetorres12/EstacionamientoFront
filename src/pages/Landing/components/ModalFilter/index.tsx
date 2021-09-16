import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Grid,
} from '@material-ui/core';
import { TicketParams } from '../../context/models/Tickets';

export interface ModalFilterProps {
  open: boolean;
  closeModal: (value: boolean) => void;
  ticketParams: TicketParams;
  setParams: (value: any) => void;
  searchTickets: () => void;
}

export const ModalFilter: React.FC<ModalFilterProps> = ({
  open,
  closeModal,
  ticketParams,
  setParams,
  searchTickets,
}) => {
  const handleCloseModal = () => {
    console.log('Se ha cerrado el modal');
    closeModal(false);
  };

  const handleClick = () => {
    console.log('Se esta buscando');
    searchTickets();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">Filtro de tickets</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="documentoUsuario"
              name="documentoUsuario"
              label="Documento Usuario"
              variant="outlined"
              value={ticketParams.documentoUsuario}
              onChange={(
                event: React.ChangeEvent<{ value: unknown; name: unknown }>,
              ) => {
                setParams({
                  ...ticketParams,
                  documentoUsuario: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel id="typePlan">Tipo de plan</InputLabel>
            <Select
              labelId="typePlan"
              id="idPlan"
              name="idPlan"
              fullWidth
              variant="outlined"
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                setParams({
                  ...ticketParams,
                  idPlan: event.target.value,
                });
              }}
            >
              <MenuItem value={0}>Media Hora</MenuItem>
              <MenuItem value={1}>1 Hora</MenuItem>
              <MenuItem value={2}>8 Horas</MenuItem>
              <MenuItem value={3}>1 Semana</MenuItem>
              <MenuItem value={4}>1 Mes</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabel id="tipeVehicule">Tipo de Vehiculo</InputLabel>
            <Select
              labelId="tipeVehicule"
              id="tipoVehiculo"
              fullWidth
              variant="outlined"
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                setParams({
                  ...ticketParams,
                  tipoVehiculo: event.target.value,
                });
              }}
            >
              <MenuItem value={0}>Moto</MenuItem>
              <MenuItem value={1}>Carro</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined" onClick={handleClick}>
          Filtrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
