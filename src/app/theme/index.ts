'use client';

import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: '12px 24px',
          border: 'solid 2px',
        },
        text: {
          border: 'none',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#4119BC',
    },
    secondary: {
      main: '#FFFFFF',
    },
    info: {
      main: '##3A3A3A',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    button: {
      textTransform: 'none',
      fontSize: 16,
      lineHeight: '22.4px',
    },
    fontFamily: roboto.style.fontFamily,
  },
});
