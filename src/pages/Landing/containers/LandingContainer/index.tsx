import React, { useContext } from 'react';
import { Landing } from 'pages/Landing/components/Landing';
import { TicketsContext } from '../../context/TicketsContext';

export const LandingContainer: React.FC = () => {
  const {
    mutations: { setOpenModal },
  } = useContext(TicketsContext);
  return <Landing openModal={setOpenModal} />;
};
