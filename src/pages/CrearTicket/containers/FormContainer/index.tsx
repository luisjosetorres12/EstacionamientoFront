import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { FormTicket } from '../../components/FormTicket';
import { useStyles } from '../../components/FormTicket/styles';
import { TicketContext } from '../../context/TicketContext';
import { SuccessAlert } from '../../components/AlertTicket';

export const FormContainer: React.FC = () => {
  const classes = useStyles();
  const {
    data: { ticket, created },
    mutations: { sendTicket, changeParam, setTicket },
  } = useContext(TicketContext);
  return (
    <div>
      <Typography
        className={classes.title}
        variant="body2"
        align="center"
        color="textSecondary"
      >
        Crear Ticket
      </Typography>
      <FormTicket
        ticket={ticket}
        onCreateTicket={sendTicket}
        changeValue={setTicket}
      />
      <SuccessAlert isCreated={created} />
    </div>
  );
};
