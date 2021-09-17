import React, { useContext } from 'react';
import { ListTickets } from '../../components/ListTickets/index';
import { ModalFilter } from '../../components/ModalFilter';
import { TicketsContext } from '../../context/TicketsContext';
import { ModalFinish } from '../../components/ModalFinish';

export const ListContainer: React.FC = () => {
  const {
    data: { openModal, ticketParams, totalPages, finishModal },
    mutations: {
      setOpenModal,
      setTicketParams,
      filterTickets,
      setPage,
      getTickets,
      setFinishModal,
    },
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
      <ListTickets
        totalPages={totalPages}
        setPage={setPage}
        getTickets={getTickets}
        openModal={setFinishModal}
      />
      <ModalFinish open={finishModal} closeModal={setFinishModal} />
    </div>
  );
};
