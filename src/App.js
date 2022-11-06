import { ActivityProvider } from './context/ActivityContext/ActivityContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Detail } from './pages';
import './styles/global.css';
import { TodoProvider } from './context/TodoContext/TodoContext';

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
        <Route
          path="/detail/:id"
          element={
            <TodoProvider>
              <Detail />
            </TodoProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
