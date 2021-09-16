import React, { useContext } from 'react';
import { TicketsContext } from '../../context/TicketsContext';

export const ListTickets: React.FC = () => {
  const {
    data: { allTickets },
  } = useContext(TicketsContext);

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
          </tr>
        </thead>
        <tbody>
          <>
            {allTickets &&
              allTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.documentoUsuario}</td>
                  <td>{ticket.tipoVehiculo}</td>
                  <td>{ticket.fechaIngreso}</td>
                  <td>{ticket.fechaSalidaSugerida || 'No registra'}</td>
                  <td>{ticket.fechaSalida || 'No registra'}</td>
                </tr>
              ))}
          </>
        </tbody>
      </table>
    </div>
  );
};
