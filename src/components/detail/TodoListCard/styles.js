const priorityColor = {
  'very-high': 'custom.red-1',
  high: 'custom.yellow-1',
  normal: 'custom.green-1',
  low: 'custom.blue-1',
  'very-low': 'custom.purple-1',
};

const styles = {
  todoListCard: {
    backgroundColor: 'custom.neutral-white',
    padding: '30px 28px',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
  },
  todoListCardBody: {
    display: 'flex',
    alignItems: 'center',
    gap: '22px',
  },
  todoTitle: (priority) => {
    return {
      width: '14px',
      height: '14px',
      backgroundColor: priorityColor[priority],
      borderRadius: '50%',
      marginRight: '19px',
    };
  },
};

export default styles;
