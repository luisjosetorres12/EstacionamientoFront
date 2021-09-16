import axios from 'axios';
import { TicketStateModel } from '../context/models/TicketStateModel';

export const ticketRestore = (): TicketStateModel => {
  return {
    idPlan: NaN,
    tipoVehiculo: NaN,
    documentoUsuario: '',
    matricula: '',
    fechaIngreso: new Date(),
  };
};

export const createTicket = (ticket: TicketStateModel): Promise<any> => {
  return axios
    .post<TicketStateModel>('api/parking', ticket)
    .then((res) => res.data);
};
