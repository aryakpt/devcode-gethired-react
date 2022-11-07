import { useContext } from 'react';
import { ActivityContext } from '../../../context/ActivityContext/ActivityContext';
import { Grid } from '@mui/material';
import ActivityCard from '../ActivityCard/ActivityCard';
import styles from './styles';

const ActivityList = () => {
  const activityCtx = useContext(ActivityContext);
  return (
    <Grid data-cy="activity-item" sx={styles.activityList} container spacing={'20px'}>
      {activityCtx.activities.map((activity, idx) => {
        return (
          <Grid data-cy={`activity-item-${idx}`} item xs={12} sm={6} md={4} lg={3} key={idx}>
            <ActivityCard
              data_cy={`activity-item-${idx}`}
              id={activity.id}
              title={activity.title}
              created_at={activity.created_at}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ActivityList;
