import React from 'react';
import { Container } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { LandingContainer } from './containers/LandingContainer';
import { ListContainer } from './containers/ListContainer';
import { TicketsProvider } from './context/TicketsContext';

export const LandingPage: React.FC<RouteComponentProps> = () => {
  return (
    <Container maxWidth="sm" disableGutters>
      <TicketsProvider>
        <LandingContainer />
        <ListContainer />
      </TicketsProvider>
    </Container>
  );
};
