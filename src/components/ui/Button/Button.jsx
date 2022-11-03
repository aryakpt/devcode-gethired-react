import React from 'react';
import { Button as MUIButton, Typography } from '@mui/material';
import styles from './styles';

const Button = ({ startIcon, onClick, children }) => {
  return (
    <MUIButton
      data-cy="activity-add-button"
      startIcon={startIcon}
      onClick={onClick}
      sx={styles.btn}
    >
      <Typography variant="button" fontWeight={600}>
        {children}
      </Typography>
    </MUIButton>
  );
};

export default Button;
