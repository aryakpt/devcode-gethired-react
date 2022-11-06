const styles = {
  modalListItemCard: {
    maxWidth: '830px',
    width: '100%',
    minHeight: '403px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'custom.neutral-white',
    borderRadius: '12px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
  },
  modalListItemCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '24px 43px 24px 30px',
    borderBottom: 1,
    borderBottomColor: 'custom.grey-3',
  },
  modalListItemCardBody: {
    padding: '30px 42px 23px 30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '26px',
  },
  modalListItemCardFooter: {
    padding: '20px 40px 20px 30px',
    borderTop: 1,
    borderTopColor: 'custom.grey-3',
    textAlign: 'right',
  },
  menuItemSpan: (color) => {
    return {
      width: '14px',
      height: '14px',
      backgroundColor: color,
      borderRadius: '50%',
      marginRight: '19px',
    };
  },
  formControl: {
    label: {
      marginBottom: '9px',
      color: 'custom.neutral-black',
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: 600,
    },
  },
};

export default styles;
