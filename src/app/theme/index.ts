'use client';

import { Poppins } from 'next/font/google';
import { createTheme, Shadows } from '@mui/material/styles';

const roboto = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  shadows: [
    'none',
    '0px 36px 72px 0px rgba(22, 25, 79, 0.1)',
    ...Array(23).fill('none'),
  ] as Shadows,
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderWidth: 2,
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: '#4119BC',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: '#4119BC',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        sizeSmall: {
          padding: '8px 16px',
        },
        outlined: {
          '&:disabled': {
            backgroundColor: '#AEAEAE',
          },
        },
        text: {
          border: 'none',
          '&:hover': {
            color: '#4119BC',
          },
          '&:disabled': {
            border: 'none',
            backgroundColor: '#F3F3F3',

            color: '#000',
          },
        },
        root: {
          padding: '12px 24px',
          border: 'solid 2px',

          '&:disabled': {
            borderColor: '#AEAEAE',
            color: '#FFFFFF',
          },
        },
      },
    },
  },
  palette: {
    action: {
      disabledBackground: '#AEAEAE',
      disabledOpacity: 1,
    },
    primary: {
      main: '#4119BC',
    },
    secondary: {
      main: '#FFFFFF',
    },
    info: {
      main: '##3A3A3A',
    },
    grey: {
      100: '#F3F3F3',
      200: '#AEAEAE',
    },
    error: {
      main: '#D02D24',
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
    body1: {
      fontSize: 16,
      lineHeight: 1,
    },
    h2: {
      fontSize: 40,
      lineHeight: 1,
    },
    caption: {
      fontSize: 12,
      lineHeight: 1,
    },
  },
});
