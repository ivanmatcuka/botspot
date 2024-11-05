import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  withThemeByClassName,
  withThemeFromJSXProvider,
} from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

import { theme } from '../src/app/theme';

import '../src/app/globals.scss';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
  withThemeByClassName({
    themes: {
      nameOfTheme: 'classNameForTheme',
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
