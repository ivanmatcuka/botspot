export const revalidate = 0;

import { ConsentProvider } from './ConsentProvider';
import './globals.scss';
import ThemeRegistry from './theme/ThemeRegistry';

import { Button } from '@/app/components/Button/Button';
import { Footer } from '@/app/components/Footer/Footer';
import { Navbar } from '@/app/components/Navbar/Navbar';
import { SnackbarProvider } from '@/app/components/Snackbar/Snackbar';
import { getProducts } from '@/services/mainService';

import { Box } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'botspot',
  description: '3D Scanning Services',
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      sizes: '48x48',
      url: '/favicon-48x48.png',
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { data: products } = await getProducts();

  const productsLinks = products.map((product) => ({
    label: product.title.rendered,
    href: `/products/${product.slug}`,
  }));

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <SnackbarProvider>
              <ConsentProvider>
                <Navbar
                  cta={
                    <Button href="/contact-us" variant="secondary">
                      Contact Us
                    </Button>
                  }
                  navItems={[
                    {
                      label: 'Products',
                      href: '/products',
                      ...(productsLinks.length && { children: productsLinks }),
                    },
                    { label: '3D Scan Service', href: '/service' },
                    {
                      label: 'Areas of use',
                      href: '/areas',
                      children: [
                        { label: 'Commercial', href: '/areas/commercial' },
                        { label: 'Industrial', href: '/areas/industrial' },
                        {
                          label: 'Custom Solutions',
                          href: '/areas/custom-solutions',
                        },
                      ],
                    },
                    { label: 'Learn About 3D Scanning', href: '/learn' },
                    {
                      label: 'About Us',
                      href: '/about',
                      children: [
                        {
                          label: 'Innovation Lab',
                          href: '/about/innovation-lab',
                        },
                        { label: 'Careers', href: '/about/careers' },
                      ],
                    },
                  ]}
                />
                <Box className="flex-1 flex flex-col">{children}</Box>
                <Footer />
              </ConsentProvider>
            </SnackbarProvider>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
