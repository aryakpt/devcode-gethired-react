import { Box, MenuItem } from '@mui/material';
import styles from './styles';
import { IconLatest, IconOldest, IconAZ, IconZA, IconUnfinished } from '../../../assets';
import { useContext } from 'react';
import { TodoContext } from '../../../context/TodoContext/TodoContext';
const ModalSort = ({ onClose }) => {
  const todoCtx = useContext(TodoContext);

  const onSortHandler = (sortBy) => {
    onClose();
    todoCtx.onSortHandler(sortBy);
    // switch (sortBy) {
    //   case 'latest':
    //     onClose();
    //     todoCtx.setSortedBy('latest');
    //     return todoCtx.setSortedTodos(todoCtx.todos.sort((a, b) => a.created_at - b.created_at));
    //   case 'oldest':
    //     onClose();
    //     todoCtx.setSortedBy('oldest');
    //     return todoCtx.setSortedTodos(todoCtx.todos.sort((a, b) => b.created_at - a.created_at));
    //   case 'asc':
    //     onClose();
    //     todoCtx.setSortedBy('asc');
    //     return todoCtx.setSortedTodos(todoCtx.todos.sort((a, b) => a.title - b.title));
    //   case 'dec':
    //     onClose();
    //     todoCtx.setSortedBy('dec');
    //     return todoCtx.setSortedTodos(todoCtx.todos.sort((a, b) => b.title - a.title));
    //   case 'unfinished':
    //     onClose();
    //     todoCtx.setSortedBy('unfinished');
    //     return todoCtx.setSortedTodos(todoCtx.todos.sort((a, b) => b.is_active - a.is_active));
    //   default:
    //     break;
    // }
  };

  return (
    <>
      <Box sx={styles.backdropModalSort} onClick={onClose}></Box>
      <Box data-cy="sort-parent" sx={styles.modalSort}>
        <MenuItem
          data-cy="sort-latest"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('latest')}
        >
          <IconLatest />
          Terbaru
        </MenuItem>
        <MenuItem
          data-cy="sort-oldest"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('oldest')}
        >
          <IconOldest />
          Terlama
        </MenuItem>
        <MenuItem
          data-cy="sort-az"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('asc')}
        >
          <IconAZ />
          A-Z
        </MenuItem>
        <MenuItem
          data-cy="sort-za"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('dec')}
        >
          <IconZA />
          Z-A
        </MenuItem>
        <MenuItem
          data-cy="sort-unfinished"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('unfinished')}
        >
          <IconUnfinished />
          Belum Selesai
        </MenuItem>
      </Box>
    </>
  );
};

export default ModalSort;
