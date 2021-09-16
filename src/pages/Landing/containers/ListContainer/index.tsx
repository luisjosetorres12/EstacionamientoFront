import React, { useContext } from 'react';
import { ListTickets } from '../../components/ListTickets/index';
import { ModalFilter } from '../../components/ModalFilter';
import { TicketsContext } from '../../context/TicketsContext';

export const ListContainer: React.FC = () => {
  const {
    data: { openModal, ticketParams },
    mutations: { setOpenModal, setTicketParams, filterTickets },
  } = useContext(TicketsContext);
  return (
    <div>
      <ModalFilter
        open={openModal}
        closeModal={setOpenModal}
        ticketParams={ticketParams}
        setParams={setTicketParams}
        searchTickets={filterTickets}
      />
      <ListTickets />
    </div>
  );
};
