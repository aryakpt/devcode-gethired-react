import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import styles from './styles';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Box component="header">
        <Navbar />
      </Box>
      <Box component="main" sx={styles.main}>
        {children}
      </Box>
    </>
  );
};

export default DefaultLayout;
