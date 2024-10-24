'use client';

import { Poppins } from 'next/font/google';
import { createTheme, Shadows } from '@mui/material/styles';

const roboto = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const colors = {
  action: {
    disabledBackground: '#AEAEAE',
    // disabledOpacity: 1,
  },
  primary: {
    main: '#4119BC',
  },
  secondary: {
    main: '#FFFFFF',
  },
  info: {
    main: '#3A3A3A',
  },
  grey: {
    100: '#F3F3F3',
    200: '#AEAEAE',
    700: '#616161',
  },
  error: {
    main: '#D02D24',
  },
  common: {
    black: '#151515',
    white: '#FFFFFF',
  },
};

const theme = createTheme({
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

          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          alignItems: 'center',
          borderRadius: '16px',
          padding: '64px 16px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#AEAEAE',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          width: '100%',
          maxWidth: 648,
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
          border: 'none',
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

          borderRadius: '8px',
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
          fontWeight: 'normal',
          '&:hover': {
            color: '#4119BC',
            backgroundColor: 'transparent',
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
          fontWeight: 'normal',

          '&:disabled': {
            borderColor: '#AEAEAE',
            color: '#FFFFFF',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: colors,
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
      lineHeight: 1.4,
    },
    h1: {
      fontSize: 60,
      lineHeight: 1,
    },
    h2: {
      fontSize: 40,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 32,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 24,
      lineHeight: 1.2,
    },
    caption: {
      fontSize: 12,
      lineHeight: 1.4,
    },
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('xl')]: {
    fontSize: 40,
  },
};
theme.components &&
  (theme.components.MuiPagination = {
    styleOverrides: {
      root: {
        '.MuiPagination-ul': {
          gap: theme.spacing(3),
          justifyContent: 'flex-start',

          [theme.breakpoints.down('xl')]: {
            gap: theme.spacing(1),
            justifyContent: 'space-evenly',
          },
        },
      },
    },
  });

export { theme };
