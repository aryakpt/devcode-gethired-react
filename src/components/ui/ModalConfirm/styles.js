const styles = {
  modalConfirmCard: {
    maxWidth: '490px',
    width: '100%',
    minHeight: '355px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'custom.neutral-white',
    padding: '50px 60px',
    borderRadius: '12px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  modalConfirmCardHeader: {
    textAlign: 'center',
  },
  modalConfirmCardBody: {
    textAlign: 'center',
  },
  modalConfirmCardFooter: {
    form: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
  },
};

export default styles;
