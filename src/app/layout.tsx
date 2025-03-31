export const revalidate = 0;

import './globals.scss';

import { Button } from '@/components/Button/Button';
import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import { SnackbarProvider } from '@/components/Snackbar';
import { getProducts } from '@/service';
import ThemeRegistry from '@/theme/ThemeRegistry';

import { Box } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { GoogleTagManager } from '@next/third-parties/google';
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

  const productsLinks = products?.map((product) => ({
    label: product.title.rendered,
    href: `/products/${product.slug}`,
  }));

  const navbarItems = [
    {
      label: 'Products',
      href: '/products',
      children: productsLinks,
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
    {
      label: 'Learn About 3D Scanning',
      href: '/learn',
      children: [{ label: '3D Academy', href: '/3d-academy' }],
    },
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
  ];

  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <SnackbarProvider>
              <Navbar
                cta={
                  <Button href="/contact-us" variant="primary">
                    Contact Us
                  </Button>
                }
                navItems={navbarItems}
              />
              <Box className="flex-1 flex flex-col">{children}</Box>
              <Footer products={products} />
            </SnackbarProvider>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
