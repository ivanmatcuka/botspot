import { palette } from './palette';

import { Theme } from '@mui/material';

export const getComponents = (theme: Theme) => ({
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
        borderRadius: theme.spacing(2),
        padding: theme.spacing(8, 2),
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: palette.grey[200],
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
          color: palette.primary.main,
        },
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        border: 'none',
        '&:hover': {
          color: palette.primary.main,
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

        borderRadius: theme.shape.borderRadius,
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
        padding: theme.spacing(1, 2),
      },
      outlined: {
        '&:disabled': {
          backgroundColor: palette.grey[200],
        },
      },
      text: {
        border: 'none',
        fontWeight: 'normal',
        '&:hover': {
          color: palette.primary.main,
          backgroundColor: 'transparent',
        },
        '&:disabled': {
          border: 'none',
          backgroundColor: palette.grey[100],

          color: palette.common.black,
        },
      },
      root: {
        padding: theme.spacing(1.5, 2.5),
        border: 'solid 2px',
        fontWeight: 'normal',

        '&:disabled': {
          borderColor: palette.grey[200],
          color: palette.common.white,
        },
      },
    },
  },
  MuiPagination: {
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
  },
});
