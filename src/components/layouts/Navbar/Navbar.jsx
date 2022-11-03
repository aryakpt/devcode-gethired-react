import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import styles from './styles';

const Navbar = () => {
  return (
    <Box data-cy="header-background" component="nav" sx={styles.navbar}>
      <Container maxWidth="lg">
        <Typography
          data-cy="header-title"
          variant="h2"
          color="custom.neutral-white"
          fontWeight={700}
        >
          TO DO LIST APP
        </Typography>
      </Container>
    </Box>
  );
};

export default Navbar;
