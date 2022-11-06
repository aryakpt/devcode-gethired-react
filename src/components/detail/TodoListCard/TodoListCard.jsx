import React, { useContext, useState } from 'react';
import styles from './styles';
import { Box, Checkbox, Typography } from '@mui/material';

import { TodoContext } from '../../../context/TodoContext/TodoContext';
import { IconTrashCan, IconModalDelete, IconTitleEdit, IconSuccess } from '../../../assets';
import { Button, ModalAlert, ModalConfirm, ModalEditListItem } from '../../ui';

const TodoListCard = ({ todo, data_cy }) => {
  const todoCtx = useContext(TodoContext);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
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
    const res = await todoCtx.deleteTodo(todoId);
    if (res) {
      setIsAlertModalOpen(true);
      setIsConfirmModalOpen(false);
    }
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
            data-cy={`todo-item-checkbox`}
            onChange={inActiveTodohandler(todo.id)}
            checked={todo.is_active ? false : true}
          />
          <Box data-cy={`todo-item-priority-indicator`} sx={styles.todoTitle(todo.priority)}></Box>
          <Typography data-cy={`todo-item-title`} sx={{ marginLeft: '-20px' }}>
            {todo.is_active ? <b>{todo.title}</b> : <del>{todo.title}</del>}
          </Typography>
          <Button
            data_cy={`todo-item-edit-button`}
            startIcon={<IconTitleEdit />}
            sx={{ padding: 0 }}
            onClick={() => setIsEditModalOpen(true)}
          ></Button>
        </Box>
        <Button
          data_cy={`todo-item-delete-button`}
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
      {isAlertModalOpen && (
        <ModalAlert
          data_cy="modal-information"
          message="Item berhasil dihapus"
          icon={<IconSuccess />}
          isOpen={isAlertModalOpen}
          onClose={() => setIsAlertModalOpen(false)}
        />
      )}
    </>
  );
};

export default TodoListCard;
