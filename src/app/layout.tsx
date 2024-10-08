import { Button } from './components/Button/Button';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import './globals.css';
import ThemeRegistry from './theme/ThemeRegistry';

import { Box } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'botspot',
  description: '3D Scanning Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Navbar
              navItems={[
                {
                  label: 'Products',
                  href: '/products',
                  children: [
                    { label: 'botscan NEO', href: '/products/botscan-neo' },
                    { label: '3D Object', href: '/products/3d-object' },
                    { label: '3D Studio', href: '/products/3d-studio' },
                  ],
                },
                { label: '3D Scan Service', href: '/service' },
                {
                  label: 'Areas of use',
                  href: '/areas',
                  children: [
                    { label: 'Commercial', href: '/areas/commercial' },
                    { label: 'Industrial', href: '/areas/industrial' },
                    { label: 'Health Care', href: '/areas/healthcare' },
                    {
                      label: 'Custom Solutions',
                      href: '/areas/custom-solutions',
                    },
                    { label: 'Learn about 3D Scanning', href: '/areas' },
                  ],
                },
                { label: 'Learn About 3D Scanning', href: '/learn' },
                {
                  label: 'About Us',
                  href: '/about',
                  children: [
                    { label: 'Innovation Lab', href: '/about/innovation-lab' },
                    { label: 'Careers', href: '/about/careers' },
                  ],
                },
              ]}
              cta={<Button variant="secondary">Contact Us</Button>}
            />
            <Box className="flex-1 flex flex-col">{children}</Box>
            <Footer />
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
