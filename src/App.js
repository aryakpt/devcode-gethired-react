import { ActivityProvider } from './context/ActivityContext/ActivityContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Detail } from './pages';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ActivityProvider>
              <Home />
            </ActivityProvider>
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
