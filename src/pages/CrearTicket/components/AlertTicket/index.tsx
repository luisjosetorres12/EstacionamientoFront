import React from 'react';
import { CheckCircle } from '@material-ui/icons';

export interface SuccessAlertProps {
  isCreated: boolean;
}

export const SuccessAlert: React.FC<SuccessAlertProps> = ({ isCreated }) => {
  if (!isCreated) {
    return <div />;
  }
  return (
    <div
      style={{
        backgroundColor: 'rgb(237, 247, 237)',
        padding: '8px',
        borderRadius: '5px',
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        fontSize: '14px',
        color: 'rgb(30, 70, 32)',
        display: 'flex',
      }}
    >
      <CheckCircle />
      <div style={{ marginTop: '5px' }}>
        Se ha creado el ticket correctamente
      </div>
    </div>
  );
};
