import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import styles from './styles';
import Button from '../Button/Button';

const ModalConfirm = ({ title, message, isOpen, onClose, onConfirm, icon, data_cy }) => {
  return (
    <Modal
      data-cy={data_cy}
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={styles.modalConfirm}
    >
      <Box sx={styles.modalConfirmCard}>
        <Box data-cy={`${data_cy}-icon`} sx={styles.modalConfirmCardHeader}>
          {icon}
        </Box>
        <Box sx={styles.modalConfirmCardBody}>
          <Typography data-cy={`${data_cy}-title`} variant="h3">
            {message} <b>"{title}"?</b>
          </Typography>
        </Box>
        <Box sx={styles.modalConfirmCardFooter}>
          <Button data_cy={`${data_cy}-cancel-button`} onClick={onClose} variant="secondary">
            Batal
          </Button>
          <Button
            data_cy={`${data_cy}-confirm-button`}
            type="submit"
            onClick={onConfirm}
            variant="danger"
          >
            Hapus
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalConfirm;
