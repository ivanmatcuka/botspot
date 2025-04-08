import { palette } from '@botspot/ui';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['object-cover', 'object-contain'],
  theme: {
    extend: {
      colors: palette,
    },
  },
  plugins: [],
};

export default config;
