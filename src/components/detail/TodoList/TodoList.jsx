import { useContext } from 'react';
import { Box } from '@mui/material';
import { TodoContext } from '../../../context/TodoContext/TodoContext';
import styles from './styles';
import TodoListCard from '../TodoListCard/TodoListCard';

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <Box data-cy="todo-item" sx={styles.todoList}>
      {todoCtx.todos.map((todo, idx) => {
        return <TodoListCard key={idx} data_cy={`todo-item-${idx}`} todo={todo} />;
      })}
    </Box>
  );
};

export default TodoList;
