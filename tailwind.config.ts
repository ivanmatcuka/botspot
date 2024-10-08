import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['object-cover', 'object-contain'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        action: {
          disabledBackground: '#AEAEAE',
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
        },
      },
    },
  },
  plugins: [],
};
export default config;
