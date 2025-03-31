import { getComponents } from './components';
import { palette } from './palette';
import { typography } from './typography';

import { createTheme, Shadows } from '@mui/material/styles';

const theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 8,
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
  shadows: [
    'none',
    '0px 36px 72px 0px rgba(22, 25, 79, 0.1)',
    ...Array(23).fill('none'),
  ] as Shadows,
});

theme.components = getComponents(theme);

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('xl')]: {
    fontSize: 40,
  },
};

export { theme };
