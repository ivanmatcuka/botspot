import type { Config } from 'tailwindcss';

import { palette } from '@botspot/ui';

const config: Config = {
  plugins: [],
  safelist: ['object-cover', 'object-contain'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: palette,
    },
  },
};

export default config;
