const styles = {
  activityCard: {
    position: 'relative',
    width: '100%',
    minHeight: '235px',
    height: '100%',
    padding: '22px 27px',
    backgroundColor: 'custom.neutral-white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '12px',
    boxShadow: '0px 6px 6px rgba(0,0,0,0.1)',
    a: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
    },
  },
  activityCardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default styles;
