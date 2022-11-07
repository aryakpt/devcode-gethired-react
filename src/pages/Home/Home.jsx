import { useContext, useEffect } from 'react';
import { DefaultLayout, Container } from '../../components';
import { HomeHeader, ActivityEmpty, ActivityList } from '../../components/home';
import { ActivityContext } from '../../context/ActivityContext/ActivityContext';
import { useDocumentTitle } from '../../utils/hooks';

const Home = () => {
  useDocumentTitle('Home');
  const activityCtx = useContext(ActivityContext);

  useEffect(() => {
    activityCtx.getAllActivity();
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <HomeHeader />
        {activityCtx.activities.length ? <ActivityList /> : <ActivityEmpty />}
      </Container>
    </DefaultLayout>
  );
};

export default Home;
