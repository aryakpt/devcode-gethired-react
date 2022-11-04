import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from '../../ui';
import { IconPlus } from '../../../assets';
import styles from './styles';
import { ActivityContext } from '../../../context/ActivityContext/ActivityContext';

const HomeHeader = () => {
  const activityCtx = useContext(ActivityContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newData = {
      title: 'New Activity',
      email: 'aryakrisna07@gmail.com',
    };
    return activityCtx.createActivity(newData);
  };

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
      <form onSubmit={submitHandler}>
        <Button
          data_cy="activity-add-button"
          type="submit"
          variant="primary"
          startIcon={<IconPlus />}
        >
          Tambah
        </Button>
      </form>
    </Box>
  );
};

export default HomeHeader;
