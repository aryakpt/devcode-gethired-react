import { customThemeMUI } from '../../../styles/customThemeMUI';

const { palette } = customThemeMUI;

const styles = {
  btn: {
    color: palette.custom['neutral-white'],
    backgroundColor: palette.custom['primary-color'],
    borderRadius: '45px',
    padding: '13.5px 22px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: palette.custom['primary-color'],
    },
  },
};

export default styles;
