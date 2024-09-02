import type { Preview } from '@storybook/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { theme } from '../src/app/theme';

import { withThemeByClassName } from "@storybook/addon-themes";

export const decorators = [withThemeFromJSXProvider({
  themes: {
    light: theme,
    dark: theme,
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
}), withThemeByClassName({
    themes: {
        // nameOfTheme: 'classNameForTheme',
        light: '',
        dark: 'dark',
    },
    defaultTheme: 'light',
})];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
