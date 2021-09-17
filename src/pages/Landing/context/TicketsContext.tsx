import React, { createContext, useEffect, useState } from 'react';
import * as listService from '../services/listService';
import { TicketModel, TicketParams } from './models/Tickets';

export interface TicketsState {
  tickets?: TicketModel[];
  openModal: boolean;
  ticketParams?: TicketParams;
  urlTosearch: string;
  pageToPagination: number;
  totalPages: number;
  finishModal: boolean;
}

const URL_ORIGINAL = 'api/parking/?page=0';

export const useStateContainer = (
  initialState: TicketsState = {
    openModal: false,
    urlTosearch: '',
    pageToPagination: 0,
    totalPages: 0,
    finishModal: false,
  },
) => {
  const [allTickets, setTickets] = useState(initialState.tickets || []);
  const [ticketParams, setTicketParams] = useState(
    initialState.ticketParams || {},
  );
  const [openModal, setOpenModal] = useState(initialState.openModal || false);
  const [finishModal, setFinishModal] = useState(
    initialState.finishModal || false,
  );
  const [urlToSearch, setUrl] = useState(URL_ORIGINAL);
  const [currentPage, setPage] = useState(initialState.pageToPagination || 0);
  const [totalPages, setTotalPages] = useState(initialState.totalPages || 0);
  useEffect(() => {
    listService.listTickets(URL_ORIGINAL).then((tickets) => {
      setTickets(tickets);
      setTotalPages(+tickets[0]?.total);
    });
  }, []);

  const filterTickets = (page: number): Promise<void> => {
    return listService.filtrarTickets(page, ticketParams).then((tickets) => {
      setTickets(tickets);
      setTotalPages(+tickets[0]?.total);
    });
  };

  const getTickets = (page: number): Promise<void> => {
    if (Object.keys(ticketParams).length > 0) {
      return filterTickets(page);
    }
    return listService
      .listTickets(`api/parking/?page=${page}`)
      .then((tickets) => setTickets(tickets));
  };

  return {
    data: {
      allTickets,
      openModal,
      ticketParams,
      urlToSearch,
      currentPage,
      totalPages,
      finishModal,
    },
    mutations: {
      setTickets,
      setOpenModal,
      setTicketParams,
      filterTickets,
      getTickets,
      setPage,
      setFinishModal,
    },
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
  initialState = {
    openModal: false,
    urlTosearch: '',
    pageToPagination: 0,
    totalPages: 0,
    finishModal: false,
  },
}) => {
  const contextValue = useStateContainer(initialState);
  return (
    <TicketsContext.Provider value={contextValue}>
      {children}
    </TicketsContext.Provider>
  );
};
