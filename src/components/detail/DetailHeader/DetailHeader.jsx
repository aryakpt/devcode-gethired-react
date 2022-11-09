import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Input, Typography } from '@mui/material';
import { Button } from '../../ui';
import { IconPlus, IconBack, IconTitleEdit, IconSort } from '../../../assets';
import styles from './styles';
import todoApi from '../../../api/todoApi';
import { trimmedString } from '../../../utils/stringUtils';
import { TodoContext } from '../../../context/TodoContext/TodoContext';
import ModalSort from '../ModalSort/ModalSort';

const DetailHeader = ({ activity, isTodosExist }) => {
  const todoCtx = useContext(TodoContext);
  const [isOnEdit, setIsOnEdit] = useState(false);
  const [isSortButtonOpen, setIsSortButtonOpen] = useState(false);
  const [activityTitle, setActivityTitle] = useState('');

  useEffect(() => {
    setActivityTitle(activity.title);
  }, [activity.title]);

  const isOnEditHandler = () => {
    setIsOnEdit(!isOnEdit);
  };

  const onSubmitHandler = (id) => {
    return (e) => {
      e.preventDefault();
      const newData = {
        title: activityTitle,
      };
      todoApi.updateActivity(id, newData);
      setIsOnEdit(false);
    };
  };

  return (
    <Box sx={styles.detailHeader}>
      <Box sx={styles.detailHeaderLeft}>
        <Link data-cy="todo-back-button" to="/">
          <IconBack />
        </Link>
        {isOnEdit ? (
          <form onSubmit={onSubmitHandler(activity.id)}>
            <Input
              data-cy="todo-title"
              type="text"
              value={activityTitle}
              onChange={(e) => setActivityTitle(e.target.value)}
              onBlur={onSubmitHandler(activity.id)}
              autoFocus
              sx={{ fontSize: '36px', lineHeight: '54px', fontWeight: 700 }}
            >
              {activityTitle}
            </Input>
          </form>
        ) : (
          <Typography
            data-cy="todo-title"
            variant="h1"
            color="custom.neutral-black"
            fontWeight={700}
            onClick={isOnEditHandler}
          >
            {trimmedString(activityTitle)}
          </Typography>
        )}
        <Button
          data_cy="todo-title-edit-button"
          startIcon={<IconTitleEdit />}
          sx={{ padding: 0 }}
          onClick={isOnEditHandler}
        />
      </Box>
      <Box sx={styles.detailHeaderRight}>
        <Box data_cy="todo-sort-button" sx={styles.detailHeaderSortButton}>
          {isTodosExist ? (
            <Button
              data_cy="todo-sort-button"
              endIcon={<IconSort />}
              sx={{ padding: 0, zIndex: 2 }}
              onClick={() => setIsSortButtonOpen(!isSortButtonOpen)}
            ></Button>
          ) : (
            ''
          )}
          {isSortButtonOpen && <ModalSort onClose={() => setIsSortButtonOpen(false)} />}
        </Box>
        <Button
          data_cy="todo-add-button"
          type="submit"
          variant="primary"
          startIcon={<IconPlus />}
          onClick={() => todoCtx.setIsCreateModalOpen(true)}
        >
          Tambah
        </Button>
      </Box>
    </Box>
  );
};

export default DetailHeader;
