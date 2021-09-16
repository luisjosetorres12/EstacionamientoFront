import axios from 'axios';
import { TicketModel, TicketParams } from '../context/models/Tickets';

export const listTickets = (): Promise<TicketModel[]> =>
  axios.get('api/parking?page=0').then((res) => res.data);

export const filtrarTickets = (ticketParams: TicketParams): Promise<any> => {
  return axios
    .get('api/parking/search?page=0', { params: ticketParams })
    .then((res) => res.data);
};
