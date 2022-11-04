import { customThemeMUI } from '../../../styles/customThemeMUI';

const { palette } = customThemeMUI;

const styles = {
  btn: {
    borderRadius: '45px',
    padding: '13.5px 22px',
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
};

export default styles;
