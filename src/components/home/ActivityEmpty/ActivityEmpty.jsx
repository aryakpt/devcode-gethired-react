import React, { useContext } from 'react';
import styles from './styles';
import { Box } from '@mui/material';
import { IconActivityEmptyState } from '../../../assets';
import { ActivityContext } from '../../../context/ActivityContext/ActivityContext';

const ActivityEmpty = () => {
  const activityCtx = useContext(ActivityContext);

  const createActivity = () => {
    return activityCtx.createActivity();
  };

  return (
    <Box data-cy="activity-empty-state" sx={styles.activityEmpty} onClick={createActivity}>
      <IconActivityEmptyState />
    </Box>
  );
};

export default ActivityEmpty;
