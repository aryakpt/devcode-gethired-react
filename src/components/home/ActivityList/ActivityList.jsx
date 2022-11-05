import { useContext } from 'react';
import { ActivityContext } from '../../../context/ActivityContext/ActivityContext';
import { Grid } from '@mui/material';
import ActivityCard from '../ActivityCard/ActivityCard';
import styles from './styles';

const ActivityList = () => {
  const activityCtx = useContext(ActivityContext);
  return (
    <Grid sx={styles.activityList} container spacing={'20px'}>
      {activityCtx.todos.map((todo, idx) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <ActivityCard
              data_cy={`activity-item-${idx}`}
              id={todo.id}
              title={todo.title}
              created_at={todo.created_at}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ActivityList;
