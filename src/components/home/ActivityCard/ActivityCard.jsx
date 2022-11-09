import { useState, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './styles';
import { IconTrashCan, IconModalDelete, IconSuccess } from '../../../assets';
import { Button, ModalAlert, ModalConfirm } from '../../ui';
import { trimmedString } from '../../../utils/stringUtils';
import { ActivityContext } from '../../../context/ActivityContext/ActivityContext';
import { Link } from 'react-router-dom';

const ActivityCard = ({ data_cy, id, title, created_at }) => {
  const activityCtx = useContext(ActivityContext);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const date = new Date(created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const onConfirmModalDelete = async (id) => {
    const res = await activityCtx.deleteActivity(id);
    if (res) {
      setIsConfirmModalOpen(false);
      setIsAlertModalOpen(true);
    }
  };

  return (
    <>
      <Box data-cy={data_cy} sx={styles.activityCard}>
        <Link to={`/detail/${id}`}></Link>
        <Typography data-cy="activity-item-title" variant="h3" fontWeight={700}>
          {trimmedString(title)}
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
      {isConfirmModalOpen && (
        <ModalConfirm
          data_cy="modal-delete"
          title={title}
          message={'Apakah anda yakin menghapus activity'}
          icon={<IconModalDelete />}
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          onConfirm={() => onConfirmModalDelete(id)}
        />
      )}
      {isAlertModalOpen && (
        <ModalAlert
          data_cy="modal-information"
          message="Activity berhasil dihapus"
          icon={<IconSuccess />}
          isOpen={isAlertModalOpen}
          onClose={() => setIsAlertModalOpen(false)}
        />
      )}
    </>
  );
};

export default ActivityCard;
