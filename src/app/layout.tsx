import '@botspot/ui/dist/ui.css';

import './globals.scss';

import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import { NextButton } from '@/components/NextButton';
import { getProducts } from '@/services';
import { Box, SnackbarProvider, ThemeRegistry } from '@botspot/ui';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { GoogleTagManager } from '@next/third-parties/google';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '500', '700'],
});

export const metadata: Metadata = {
  description: '3D Scanning Services',
  title: 'botspot',
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
    href: `/products/${product.slug}`,
    label: product.title.rendered,
  }));

  const navbarItems = [
    {
      children: productsLinks,
      href: '/products',
      label: 'Products',
    },
    { href: '/service', label: '3D Scan Service' },
    {
      href: '/areas',
      label: 'Areas of use',
      children: [
        { href: '/areas/commercial', label: 'Commercial' },
        { href: '/areas/industrial', label: 'Industrial' },
        {
          href: '/areas/custom-solutions',
          label: 'Custom Solutions',
        },
      ],
    },
    {
      children: [{ href: '/3d-academy', label: '3D Academy' }],
      href: '/learn',
      label: 'Learn About 3D Scanning',
    },
    {
      href: '/about',
      label: 'About Us',
      children: [
        {
          href: '/about/innovation-lab',
          label: 'Innovation Lab',
        },
        { href: '/about/careers', label: 'Careers' },
      ],
    },
  ];

  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        <Script id="varify">
          {`window.varify = window.varify || {}; window.varify.iid = 4004;`}
        </Script>
        <Script src="https://app.varify.io/varify.js" />
      </head>
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <SnackbarProvider>
              <NextTopLoader />
              <Navbar
                cta={
                  <NextButton href="/contact-us" variant="primary">
                    Contact Us
                  </NextButton>
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
