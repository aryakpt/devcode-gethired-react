import React, { useContext, useState } from 'react';
import styles from './styles';
import { Box, Checkbox, Typography } from '@mui/material';

import { TodoContext } from '../../../context/TodoContext/TodoContext';
import { IconTrashCan, IconModalDelete, IconTitleEdit } from '../../../assets';
import { Button, ModalConfirm, ModalEditListItem } from '../../ui';

const TodoListCard = ({ todo, data_cy }) => {
  const todoCtx = useContext(TodoContext);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const inActiveTodohandler = (todoId) => {
    return (e) => {
      if (e.target.checked) {
        todoCtx.updateTodo(todoId, { is_active: false });
      } else {
        todoCtx.updateTodo(todoId, { is_active: true });
      }
    };
  };

  const onConfirmModalDelete = async (todoId) => {
    todoCtx.deleteTodo(todoId);
    setIsConfirmModalOpen(false);
  };

  const updateTodoHandler = (data, todoId = todo.id) => {
    todoCtx.updateTodo(todoId, data);
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Box data-cy={data_cy} sx={styles.todoListCard}>
        <Box sx={styles.todoListCardBody}>
          <Checkbox
            onChange={inActiveTodohandler(todo.id)}
            checked={todo.is_active ? false : true}
          />
          <Box sx={styles.todoTitle(todo.priority)}></Box>
          <Typography sx={{ marginLeft: '-20px' }}>
            {todo.is_active ? <b>{todo.title}</b> : <del>{todo.title}</del>}
          </Typography>
          <Button
            startIcon={<IconTitleEdit />}
            sx={{ padding: 0 }}
            onClick={() => setIsEditModalOpen(true)}
          ></Button>
        </Box>
        <Button
          endIcon={<IconTrashCan />}
          onClick={() => setIsConfirmModalOpen(true)}
          sx={{ padding: 0 }}
        ></Button>
      </Box>
      {isConfirmModalOpen && (
        <ModalConfirm
          data_cy="modal-delete"
          title={todo.title}
          message={'Apakah anda yakin menghapus item'}
          icon={<IconModalDelete />}
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          onConfirm={() => onConfirmModalDelete(todo.id)}
        />
      )}
      {isEditModalOpen && (
        <ModalEditListItem
          data_cy="modal-edit"
          todo={todo}
          title="Edit Item"
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onConfirm={updateTodoHandler}
        />
      )}
    </>
  );
};

export default TodoListCard;
