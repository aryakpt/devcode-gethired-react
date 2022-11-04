import React from 'react';
import { Button as MUIButton, Typography } from '@mui/material';
import styles from './styles';

const Button = ({ startIcon, type, variant, onClick, children }) => {
  return (
    <MUIButton
      disableRipple={true}
      data-cy="activity-add-button"
      startIcon={startIcon}
      onClick={onClick}
      type={type}
      sx={{ ...styles.btn, ...styles[variant] }}
    >
      <Typography variant="button" fontWeight={600} sx={{ textTransform: 'capitalize' }}>
        {children}
      </Typography>
    </MUIButton>
  );
};

export default Button;
