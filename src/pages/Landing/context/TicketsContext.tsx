import React, { createContext, useEffect, useState } from 'react';
import * as listService from '../services/listService';
import { TicketModel, TicketParams } from './models/Tickets';

export interface TicketsState {
  tickets?: TicketModel[];
  openModal: boolean;
  ticketParams?: TicketParams;
}

export const useStateContainer = (
  initialState: TicketsState = { openModal: false },
) => {
  const [allTickets, setTickets] = useState(initialState.tickets || []);
  const [ticketParams, setTicketParams] = useState(
    initialState.ticketParams || {},
  );
  const [openModal, setOpenModal] = useState(initialState.openModal || false);
  useEffect(() => {
    listService.listTickets().then((tickets) => setTickets(tickets));
  }, []);

  const filterTickets = (): Promise<void> => {
    return listService
      .filtrarTickets(ticketParams)
      .then((tickets) => setTickets(tickets));
  };

  return {
    data: { allTickets, openModal, ticketParams },
    mutations: { setTickets, setOpenModal, setTicketParams, filterTickets },
  };
};

export const TicketsContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

export interface TicketProviderProps {
  initialState?: TicketsState;
}

export const TicketsProvider: React.FC<TicketProviderProps> = ({
  children,
  initialState = { openModal: false },
}) => {
  const contextValue = useStateContainer(initialState);
  return (
    <TicketsContext.Provider value={contextValue}>
      {children}
    </TicketsContext.Provider>
  );
};
