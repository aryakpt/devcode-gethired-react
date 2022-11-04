import React from 'react';
import { Button as MUIButton, Typography } from '@mui/material';
import styles from './styles';

const Button = ({ data_cy, startIcon, type, variant, onClick, children, sx }) => {
  return (
    <MUIButton
      disableRipple={true}
      data-cy={data_cy}
      startIcon={startIcon}
      onClick={onClick}
      type={type}
      sx={{ ...styles.btn, ...styles[variant], ...sx }}
    >
      <Typography variant="button" fontWeight={600} sx={{ textTransform: 'capitalize' }}>
        {children}
      </Typography>
    </MUIButton>
  );
};

export default Button;
