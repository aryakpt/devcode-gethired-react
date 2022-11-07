import React from 'react';
import { Box } from '@mui/material';
import styles from './styles';

const Container = ({ data_cy, children }) => {
  return (
    <Box data-cy={data_cy} sx={styles.container}>
      {children}
    </Box>
  );
};

export default Container;
