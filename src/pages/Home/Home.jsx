import { useContext } from 'react';
import { DefaultLayout } from '../../components';
import { Container } from '@mui/material';
import { HomeHeader, ActivityEmpty, ActivityList } from '../../components/home';
import { ActivityContext } from '../../context/ActivityContext/ActivityContext';

const Home = () => {
  const activityCtx = useContext(ActivityContext);
  return (
    <DefaultLayout>
      <Container maxWidth="lg">
        <HomeHeader />
        {activityCtx.todos.length ? <ActivityList /> : <ActivityEmpty />}
      </Container>
    </DefaultLayout>
  );
};

export default Home;
