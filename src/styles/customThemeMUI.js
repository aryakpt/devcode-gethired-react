import { createTheme } from '@mui/material/styles';
import colorPallete from './colorPallete';

export const customThemeMUI = createTheme({
  typography: {
    fontFamily: 'Poppins ,sans-serif',
    fontSize: 16,
    htmlFontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: '36px',
      lineHeight: '54px',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '36px',
    },
    h3: {
      fontSize: '18px',
      lineHeight: '27px',
    },
    s: {
      fontSize: '14px',
      lineHeight: '21px',
    },
    button: {
      fontSize: '18px',
      lineHeight: '27px',
    },
  },
  palette: {
    custom: {
      'primary-color': colorPallete['primary-color'],
      'neutral-black': colorPallete['neutral-black'],
      'neutral-white': colorPallete['neutral-white'],
      'grey-1': colorPallete['grey-1'],
      'grey-2': colorPallete['grey-2'],
      'grey-3': colorPallete['grey-3'],
      'grey-4': colorPallete['grey-4'],
      'red-1': colorPallete['red-1'],
      'yellow-1': colorPallete['yellow-1'],
      'green-1': colorPallete['green-1'],
      'blue-1': colorPallete['blue-1'],
      'purple-1': colorPallete['purple-1'],
    },
  },
});
