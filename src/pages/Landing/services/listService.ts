import axios from 'axios';
import { TicketModel, TicketParams } from '../context/models/Tickets';

export const listTickets = (url: string): Promise<TicketModel[]> =>
  axios.get(url).then((res) => res.data);

export const filtrarTickets = (
  page: number,
  ticketParams: TicketParams,
): Promise<any> => {
  return axios
    .get(`api/parking/search?page=${page}`, { params: ticketParams })
    .then((res) => res.data);
};
