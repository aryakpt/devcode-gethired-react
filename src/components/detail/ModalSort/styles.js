const styles = {
  backdropModalSort: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  modalSort: {
    minWidth: '235px',
    position: 'absolute',
    borderRadius: '6px',
    zIndex: 2,
    top: 65,
    right: 0,
    backgroundColor: 'custom.neutral-white',
    boxShadow: ' 0px 6px 15px 5px rgba(0, 0, 0, 0.1)',
  },
  modalSortMenuItem: {
    div: {
      display: 'flex',
      gap: '17.25px',
      alignItems: 'center',
    },
    padding: '14px 24px',
    borderTop: 1,
    borderBottom: 1,
    borderColor: 'custom.grey-3',
  },
};

export default styles;
