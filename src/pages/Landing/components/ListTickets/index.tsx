import React, { useContext } from 'react';
import { Pagination } from '@material-ui/lab';
import { CheckCircle, Edit } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { TicketsContext } from '../../context/TicketsContext';

const PAGE_LESS_DEFAULT = 1;

export interface ListTicketsProps {
  setPage: (value: number) => void;
  totalPages: number;
  getTickets: (value: number) => Promise<void>;
  openModal: (value: boolean) => void;
}

export const ListTickets: React.FC<ListTicketsProps> = ({
  setPage,
  totalPages,
  getTickets,
  openModal,
}) => {
  const {
    data: { allTickets },
  } = useContext(TicketsContext);

  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    getTickets(page - PAGE_LESS_DEFAULT);
  };
  const handleClickFinish = () => {
    openModal(true);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Documento Usuario</th>
            <th>Tipo Vehiculo</th>
            <th>Fecha Ingreso</th>
            <th>Fecha Salida Sugerida</th>
            <th>Fecha Salida</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <>
            {allTickets &&
              allTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.documentoUsuario}</td>
                  <td>{ticket.tipoVehiculo === 1 ? 'Moto' : 'Carro'}</td>
                  <td>{ticket.fechaIngreso}</td>
                  <td>
                    {new Date(ticket.fechaSalidaSugerida).toLocaleString() ||
                      'No registra'}
                  </td>
                  <td>{ticket.fechaSalida || 'No registra'}</td>
                  <td style={{ display: 'flex' }}>
                    <Button
                      onClick={handleClickFinish}
                      style={{ color: '#73be5b' }}
                    >
                      <CheckCircle />
                    </Button>
                    <Button
                      onClick={handleClickFinish}
                      style={{ color: '#73be5b' }}
                    >
                      <Edit />
                    </Button>
                  </td>
                </tr>
              ))}
          </>
        </tbody>
      </table>
      <Pagination
        count={totalPages}
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
};
