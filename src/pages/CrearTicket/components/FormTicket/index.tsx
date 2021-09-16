import React from 'react';
import {
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from '@material-ui/core';
import { TicketStateModel } from '../../context/models/TicketStateModel';

export interface FormTicketProps {
  ticket: TicketStateModel;
  onCreateTicket: (ticket: TicketStateModel) => void;
  changeValue: (value: any) => void;
}

export const FormTicket: React.FC<FormTicketProps> = ({
  ticket,
  onCreateTicket,
  changeValue,
}) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeValue({
      ...ticket,
      fechaIngreso: new Date(),
    });
    onCreateTicket(ticket);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="documentoUsuario"
            name="documentoUsuario"
            label="Documento Usuario"
            variant="outlined"
            value={ticket.documentoUsuario}
            onChange={(
              event: React.ChangeEvent<{ value: unknown; name: unknown }>,
            ) => {
              changeValue({
                ...ticket,
                documentoUsuario: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="matricula"
            name="matricula"
            label="Matricula Vehiculo"
            variant="outlined"
            onChange={(
              event: React.ChangeEvent<{ value: unknown; name: unknown }>,
            ) => {
              changeValue({
                ...ticket,
                matricula: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="typePlan">Tipo de plan</InputLabel>
          <Select
            labelId="typePlan"
            id="idPlan"
            fullWidth
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              changeValue({
                ...ticket,
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
          <InputLabel id="typeVehicule">Tipo de vehiculo</InputLabel>
          <Select
            labelId="typeVehicule"
            id="tipoVehiculo"
            fullWidth
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              changeValue({
                ...ticket,
                tipoVehiculo: event.target.value,
              });
            }}
          >
            <MenuItem value={0}>Moto</MenuItem>
            <MenuItem value={1}>Carro</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" color="primary" type="submit">
            Crear Ticket
          </Button>
          <Button variant="outlined" color="secondary" href="/">
            Volver
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
