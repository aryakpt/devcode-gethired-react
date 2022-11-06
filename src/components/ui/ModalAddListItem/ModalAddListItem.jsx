import { useState } from 'react';
import styles from './styles';
import {
  Modal,
  Box,
  Typography,
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import Button from '../Button/Button';
import { IconClose } from '../../../assets';

const priorityList = [
  { value: 'very-high', color: 'custom.red-1', text: 'Very High' },
  { value: 'high', color: 'custom.yellow-1', text: 'High' },
  {
    value: 'normal',
    color: 'custom.green-1',
    text: 'Medium',
  },
  {
    value: 'low',
    color: 'custom.blue-1',
    text: 'Low',
  },

  {
    value: 'very-low',
    color: 'custom.purple-1',
    text: 'Very Low',
  },
];

const ModalAddListItem = ({ data_cy, isOpen, onClose, onConfirm, title }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputPriority, setInputPriority] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newData = {
      title: inputTitle,
      priority: inputPriority,
      is_active: true,
    };
    onConfirm(newData);
    setInputTitle('');
    setInputPriority('');
  };

  return (
    <Modal data-cy={data_cy} open={isOpen} onClose={onClose}>
      <Box sx={styles.modalListItemCard}>
        <Box sx={styles.modalListItemCardHeader}>
          <Typography data-cy={`${data_cy}-title`} variant="h3" fontWeight={700}>
            {title}
          </Typography>
          <Button
            data_cy={`${data_cy}-close-button`}
            endIcon={<IconClose />}
            sx={{ padding: 0 }}
            onClick={onClose}
          ></Button>
        </Box>
        <form onSubmit={onSubmitHandler}>
          <Box sx={styles.modalListItemCardBody}>
            <Box sx={styles.formControl}>
              <InputLabel data-cy={`${data_cy}-name-title`}>NAMA LIST ITEM</InputLabel>
              <Input
                data-cy={`${data_cy}-name-input`}
                disableUnderline
                type="text"
                placeholder="Tambahkan nama kalian"
                sx={{
                  width: '100%',
                  border: 1,
                  borderRadius: '6px',
                  borderColor: 'custom.grey-3',
                  padding: '12px 14px',
                }}
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
                required
              />
            </Box>
            <Box sx={styles.formControl}>
              <InputLabel data-cy={`${data_cy}-priority-title`}>PRIORITY</InputLabel>
              <FormControl
                data-cy={`${data_cy}-priority-dropdown`}
                sx={{
                  width: '100%',
                  maxWidth: '205px',
                }}
              >
                <Select
                  value={inputPriority}
                  onChange={(e) => setInputPriority(e.target.value)}
                  displayEmpty
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return 'Pilih Priority';
                    }

                    return (
                      <Typography sx={{ textTransform: 'capitalize' }}>
                        {selected === 'normal' ? 'Medium' : selected.split('-').join(' ')}
                      </Typography>
                    );
                  }}
                  required
                >
                  <MenuItem disabled value="">
                    Pilih Priority
                  </MenuItem>
                  {priorityList.map((priority, idx) => {
                    return (
                      <MenuItem
                        data-cy={`${data_cy}-priority-item`}
                        key={idx}
                        value={priority.value}
                      >
                        <Box component="span" sx={styles.menuItemSpan(priority.color)}></Box>
                        <Typography sx={{ textTransform: 'capitalize' }}>
                          {priority.text}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={styles.modalListItemCardFooter}>
            <Button
              data_cy={`${data_cy}-save-button`}
              variant="primary"
              type="submit"
              disabled={inputTitle || inputPriority ? false : true}
            >
              Simpan
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalAddListItem;
