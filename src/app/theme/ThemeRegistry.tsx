'use client';

import { theme } from '.';

import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
