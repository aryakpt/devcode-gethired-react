import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Input, Typography } from '@mui/material';
import { Button } from '../../ui';
import { IconPlus, IconBack, IconTitleEdit, IconSort } from '../../../assets';
import styles from './styles';
import todoApi from '../../../api/todoApi';
import { trimmedString } from '../../../utils/stringUtils';
import { TodoContext } from '../../../context/TodoContext/TodoContext';

const DetailHeader = ({ activity, isTodosExist }) => {
  const todoCtx = useContext(TodoContext);
  const [isOnEdit, setIsOnEdit] = useState(false);
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
        <Link to="/">
          <IconBack />
        </Link>
        {isOnEdit ? (
          <form onSubmit={onSubmitHandler(activity.id)}>
            <Input
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
        <Button startIcon={<IconTitleEdit />} sx={{ padding: 0 }} onClick={isOnEditHandler} />
      </Box>
      <Box sx={styles.detailHeaderRight}>
        {isTodosExist ? <Button endIcon={<IconSort />} sx={{ padding: 0 }}></Button> : ''}
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
