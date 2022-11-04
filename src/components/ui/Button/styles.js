import { customThemeMUI } from '../../../styles/customThemeMUI';

const { palette } = customThemeMUI;

const styles = {
  btn: {
    borderRadius: '45px',
    padding: '13.5px 50px',
    transition: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  primary: {
    color: palette.custom['neutral-white'],
    backgroundColor: palette.custom['primary-color'],
    '&:hover': {
      backgroundColor: palette.custom['primary-color'],
    },
  },
  secondary: {
    color: palette.custom['neutral-black'],
    backgroundColor: palette.custom['grey-4'],
    '&:hover': {
      backgroundColor: palette.custom['grey-4'],
    },
  },
  danger: {
    color: palette.custom['neutral-white'],
    backgroundColor: palette.custom['red-1'],
    '&:hover': {
      backgroundColor: palette.custom['red-1'],
    },
  },
};

export default styles;
