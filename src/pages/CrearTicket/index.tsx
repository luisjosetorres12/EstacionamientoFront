import React from 'react';
import { Container } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { FormContainer } from './containers/FormContainer';
import { TicketProvider } from './context/TicketContext';

export const CrearTicketPage: React.FC<RouteComponentProps> = () => {
  return (
    <Container maxWidth="sm" disableGutters>
      <TicketProvider>
        <FormContainer />
      </TicketProvider>
    </Container>
  );
};
