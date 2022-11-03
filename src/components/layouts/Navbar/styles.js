import { customThemeMUI } from '../../../styles/customThemeMUI';

const { palette } = customThemeMUI;

const styles = {
  navbar: {
    height: '105px',
    minHeight: '100%',
    backgroundColor: palette.custom['primary-color'],
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
    div: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
  },
};

export default styles;
