import React, { useContext } from 'react';
import styles from './styles';
import { Box } from '@mui/material';
import { IconActivityEmptyState } from '../../../assets';
import { Button } from '../../ui';
import { ActivityContext } from '../../../context/ActivityContext/ActivityContext';

const ActivityEmpty = () => {
  const activityCtx = useContext(ActivityContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = {
      title: 'New Activity',
      email: 'aryakrisna07@gmail.com',
    };
    return activityCtx.createActivity(newData);
  };

  return (
    <Box data-cy="activity-empty-state" sx={styles.activityEmpty}>
      <form onSubmit={submitHandler}>
        <Button type={'submit'}>
          <IconActivityEmptyState />
        </Button>
      </form>
    </Box>
  );
};

export default ActivityEmpty;
