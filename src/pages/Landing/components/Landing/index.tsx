import React, { useState } from 'react';
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import Logo from 'assets/image/logo.svg';
import { useStyles } from './styles';

export interface LandingProps {
  openModal: (value: boolean) => void;
}
export const Landing: React.FC<LandingProps> = ({ openModal }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [showError, setShowError] = useState(false);

  const handleClick = () => {
    console.log('Diste Click wapo');
    openModal(true);
  };

  return (
    <>
      <Grid container className={classes.container}>
        <Grid justify="center" container item xs={10} md={12}>
          <Grid item>
            <Typography
              className={classes.title}
              variant="body2"
              align="center"
              color="textSecondary"
            >
              Parqueadero Manager
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Button variant="outlined" color="primary" href="/create">
              Crear Ticket
            </Button>
            <Button variant="outlined" onClick={handleClick} color="secondary">
              Filtrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
