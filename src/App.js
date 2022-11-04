import { ActivityProvider } from './context/ActivityContext/ActivityContext';
import { Home } from './pages';
import './styles/global.css';

function App() {
  return (
    <>
      <ActivityProvider>
        <Home />
      </ActivityProvider>
    </>
  );
}

export default App;
