import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Poppins } from 'next/font/google';

const roboto = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const typography: TypographyOptions = {
  button: {
    fontSize: 16,
    lineHeight: '22.4px',
    textTransform: 'none',
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
};
