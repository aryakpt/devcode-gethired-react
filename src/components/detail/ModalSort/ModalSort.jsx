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
      <Box data-cy="sort-parent" sx={styles.modalSort}>
        <MenuItem
          data-cy="sort-selection"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('latest')}
        >
          <Box data-cy="sort-latest">
            <IconLatest />
            Terbaru
          </Box>
        </MenuItem>
        <MenuItem
          data-cy="sort-selection"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('oldest')}
        >
          <Box data-cy="sort-oldest">
            <IconOldest />
            Terlama
          </Box>
        </MenuItem>
        <MenuItem
          data-cy="sort-selection"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('asc')}
        >
          <Box data-cy="sort-az">
            <IconAZ />
            A-Z
          </Box>
        </MenuItem>
        <MenuItem
          data-cy="sort-selection"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('dec')}
        >
          <Box data-cy="sort-za">
            <IconZA />
            Z-A
          </Box>
        </MenuItem>
        <MenuItem
          data-cy="sort-selection"
          sx={styles.modalSortMenuItem}
          onClick={() => onSortHandler('unfinished')}
        >
          <Box data-cy="unfinished">
            <IconUnfinished />
            Belum Selesai
          </Box>
        </MenuItem>
      </Box>
    </>
  );
};

export default ModalSort;
