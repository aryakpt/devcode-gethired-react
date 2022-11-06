import { useState, createContext } from 'react';
import todoApi from '../../api/todoApi';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const getAllTodos = async (activityId) => {
    const res = await todoApi.getAllTodo(activityId);
    setTodos([...res, ...todos]);
  };

  const createTodo = async (data) => {
    const res = await todoApi.createTodo(data);
    setTodos([res, ...todos]);
  };

  const updateTodo = async (todoId, data) => {
    const res = await todoApi.updateTodo(todoId, data);
    const newTodos = [...todos];
    const updatedIndex = todos.findIndex((todo) => todo.id === todoId);
    newTodos[updatedIndex] = res;
    setTodos(newTodos);
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
    return todoApi.deleteTodo(todoId);
  };

  const value = {
    todos,
    setTodos,
    isCreateModalOpen,
    setIsCreateModalOpen,
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
