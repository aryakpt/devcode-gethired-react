import { useContext } from 'react';
import { DefaultLayout, Container } from '../../components';
import { HomeHeader, ActivityEmpty, ActivityList } from '../../components/home';
import { ActivityContext } from '../../context/ActivityContext/ActivityContext';

const Home = () => {
  const activityCtx = useContext(ActivityContext);
  return (
    <DefaultLayout>
      <Container>
        <HomeHeader />
        {activityCtx.todos.length ? <ActivityList /> : <ActivityEmpty />}
      </Container>
    </DefaultLayout>
  );
};

export default Home;
