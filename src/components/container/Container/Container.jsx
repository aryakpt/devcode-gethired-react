import React from 'react';
import { Box } from '@mui/material';
import styles from './styles';

const Container = ({ children }) => {
  return <Box sx={styles.container}>{children}</Box>;
};

export default Container;
