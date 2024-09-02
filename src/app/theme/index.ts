'use client';

import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4119BC',
    },
    secondary: {
      main: '#FFFFFF',
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
