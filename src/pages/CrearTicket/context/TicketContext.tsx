import React, { createContext, useContext, useEffect, useState } from 'react';
import { TicketStateModel } from './models/TicketStateModel';
import * as ticketService from '../services/ticketService';

export const useStateContainer = (initialState: {
  ticket: TicketStateModel;
  created: boolean;
}) => {
  const [ticket, setTicket] = useState<TicketStateModel>(initialState.ticket);

  const [created, setCreated] = useState<boolean>(false);

  const changeParam = (value: any) => {
    setTicket(value);
  };

  const sendTicket = (): Promise<void> => {
    return ticketService.createTicket(ticket).then((res) => {
      setTicket(res);
      setCreated(true);
    });
  };

  return {
    data: { ticket, created },
    mutations: { sendTicket, changeParam, setTicket },
  };
};

export const TicketContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

export const TicketProvider: React.FC = ({ children }) => {
  const contextValue = useStateContainer({
    ticket: ticketService.ticketRestore(),
    created: false,
  });
  return (
    <TicketContext.Provider value={contextValue}>
      {children}
    </TicketContext.Provider>
  );
};
