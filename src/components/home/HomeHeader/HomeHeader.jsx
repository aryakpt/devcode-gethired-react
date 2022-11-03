import React from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from '../../ui';
import { IconPlus } from '../../../assets';
import styles from './styles';

const HomeHeader = () => {
  return (
    <Box sx={styles.homeHeader}>
      <Typography
        data-cy="activity-title"
        variant="h1"
        color="custom.neutral-black"
        fontWeight={700}
      >
        Activity
      </Typography>
      <Button startIcon={<IconPlus />}>Tambah</Button>
    </Box>
  );
};

export default HomeHeader;
