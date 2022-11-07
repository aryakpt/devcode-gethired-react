import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from '../../ui';
import { IconPlus } from '../../../assets';
import { ActivityContext } from '../../../context/ActivityContext/ActivityContext';
import styles from './styles';

const HomeHeader = () => {
  const activityCtx = useContext(ActivityContext);
  const createActivity = () => {
    return activityCtx.createActivity();
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
      <Button
        data_cy="activity-add-button"
        type="submit"
        variant="primary"
        startIcon={<IconPlus />}
        onClick={createActivity}
      >
        Tambah
      </Button>
    </Box>
  );
};

export default HomeHeader;
