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
  };

  return (
    <>
      <Box sx={styles.backdropModalSort} onClick={onClose}></Box>
      <Box sx={styles.modalSort}>
        <MenuItem
          data-cy="sort-selection"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('latest')}
        >
          <IconLatest />
          Terbaru
        </MenuItem>
        <MenuItem
          data-cy="sort-selection"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('oldest')}
        >
          <IconOldest />
          Terlama
        </MenuItem>
        <MenuItem
          data-cy="sort-selection"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('asc')}
        >
          <IconAZ />
          A-Z
        </MenuItem>
        <MenuItem
          data-cy="sort-selection"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('dec')}
        >
          <IconZA />
          Z-A
        </MenuItem>
        <MenuItem
          data-cy="sort-selection"
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
