import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import styles from './styles';

const ModalAlert = ({ icon, message, isOpen, onClose, data_cy }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box data-cy={data_cy} sx={styles.modalAlertCard}>
        <Box sx={styles.modalAlertCardBody}>
          <Typography
            data-cy={`${data_cy}-icon`}
            component="span"
            sx={styles.modalAlertCardBodyIcon}
          >
            {icon}
          </Typography>
          <Typography data-cy={`${data_cy}-title`} variant="h4">
            {message}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalAlert;
