import { useState, useEffect, createContext } from 'react';
import todoApi from '../../api/todoApi';

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const fetchAllActivity = async () => {
    const res = await todoApi.getAllActivity();
    setTodos(res);
  };

  const createActivity = async () => {
    const res = await todoApi.createActivity();
    setTodos([res.data, ...todos]);
    return res;
  };

  const deleteActivity = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    return todoApi.deleteActivity(id);
  };

  useEffect(() => {
    fetchAllActivity();
  }, []);

  const value = {
    todos,
    createActivity,
    deleteActivity,
  };

  return <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>;
};

export { ActivityContext, ActivityProvider };
