'use client';

import { ThemeRegistry } from '@botspot/ui';
import { ReactNode } from 'react';

export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <ThemeRegistry>{children}</ThemeRegistry>;
}
