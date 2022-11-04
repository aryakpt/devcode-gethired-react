import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './styles';
import { IconTrashCan, IconModalDelete } from '../../../assets';
import { Button, ModalConfirm } from '../../ui';
import { trimmedString } from '../../../utils/stringUtils';

const ActivityCard = ({ data_cy, id, title, created_at }) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const date = new Date(created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Box data-cy={data_cy} sx={styles.activityCard}>
        <Typography data-cy="activity-item-title" variant="h3" fontWeight={700}>
          {trimmedString(title, 50)}
        </Typography>
        <Box sx={styles.activityCardFooter}>
          <Typography
            data-cy="activity-item-date"
            component={'p'}
            variant="s"
            color="custom.grey-2"
          >
            {date}
          </Typography>
          <Button
            data_cy="activity-item-delete-button"
            sx={{ padding: 0, minWidth: 0 }}
            endIcon={<IconTrashCan />}
            onClick={() => setIsConfirmModalOpen(true)}
          ></Button>
        </Box>
      </Box>
      <ModalConfirm
        data_cy="modal-delete"
        title={title}
        message={'Apakah anda yakin menghapus activity'}
        icon={<IconModalDelete />}
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={() => console.log('onConfirm Function')}
      />
    </>
  );
};

export default ActivityCard;
