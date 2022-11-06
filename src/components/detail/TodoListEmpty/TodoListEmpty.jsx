import React, { useContext } from 'react';
import { Box } from '@mui/material';
import styles from './styles';
import { IconActivityEmptyState } from '../../../assets';
import { TodoContext } from '../../../context/TodoContext/TodoContext';

const TodoListEmpty = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <Box
      data-cy="todo-empty-state"
      sx={styles.todoEmpty}
      onClick={() => todoCtx.setIsCreateModalOpen(true)}
    >
      <IconActivityEmptyState />
    </Box>
  );
};

export default TodoListEmpty;
