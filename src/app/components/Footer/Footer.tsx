import { getProducts } from '@/services/mainService';

import {
  Box,
  Container,
  Grid,
  Typography,
  TypographyProps,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Text = ({
  children,
  href,
  ...props
}: TypographyProps & { href?: string }) => {
  let link;

  if (href) {
    link = (
      <Link href={href} className="hover:underline">
        {children}
      </Link>
    );
  }

  return (
    <Typography variant="body2" color="white" {...props}>
      {link ?? children}
    </Typography>
  );
};

type IconLinkProps = {
  href: string;
  src: string;
  alt: string;
};
const IconLink: FC<IconLinkProps> = ({ href, src, alt }) => (
  <Link href={href} className="hover:underline">
    <Image width={32} height={32} src={src} alt={alt} />
  </Link>
);

export const Footer = async () => {
  const products = await getProducts();

  return (
    <>
      <footer className="bg-info-main">
        <Container maxWidth="xl">
          <Grid container py={8} xs={12} md={10} mx="auto">
            <Grid item flexBasis={{ xs: '100%', md: '40%' }}>
              <Image width={184} height={74} src="/logo_white.svg" alt="logo" />
              <Text>botspot 3D Scan GmbH</Text>
              <Text>Bruno-Bürgel-Weg 134-144</Text>
              <Text>12439 Berlin</Text>
              <br />
              <Text href="tel:+49 30 985 40 400">+49 30 985 40 400</Text>
              <br />
              <Text href="mailto:mail@botspot.de">mail@botspot.de</Text>
              <Box mt={3} display={{ xs: 'none', md: 'flex' }} gap={3}>
                <IconLink
                  href="https://instagram.com/botspot3d/"
                  src="/link_ig.svg"
                  alt="instagram"
                />
                <IconLink
                  href="https://x.com/botspot3d"
                  src="/link_x.svg"
                  alt="x"
                />
                <IconLink
                  href="https://linkedin.com/company/botspot-3d-scan/"
                  src="/link_linkedin.svg"
                  alt="linkedin"
                />
              </Box>
            </Grid>
            <Grid
              item
              flexBasis={{ xs: '100%', md: '20%' }}
              mt={{ xs: 5, md: 9.25 }}
            >
              <Text href="/products">3D Scanner</Text>
              <br />
              {products.data.map((product, index) => (
                <Text key={index} href={`/products/${product.slug}`}>
                  {product.title.rendered}
                </Text>
              ))}
            </Grid>
            <Grid
              item
              flexBasis={{ xs: '100%', md: '20%' }}
              mt={{ xs: 5, md: 9.25 }}
            >
              <Text>Resources</Text>
              <br />
              <Text href="/service">3D Scan Service</Text>
              <Text href="/areas">Areas of Use</Text>
              <Text href="/learn">What is 3D Scanning?</Text>
            </Grid>
            <Grid
              item
              flexBasis={{ xs: '100%', md: '20%' }}
              mt={{ xs: 5, md: 9.25 }}
            >
              <Text>Company</Text>
              <br />
              <Text href="/about">About Us</Text>
              <Text href="/about/innovation-lab">Innovation Lab</Text>
              <Text href="/about/careers">Careers</Text>
            </Grid>
            <Box
              mt={3}
              gap={3}
              display={{ xs: 'flex', md: 'none' }}
              justifyContent="center"
              mx="auto"
            >
              <IconLink
                href="https://instagram.com/botspot3d/"
                src="/link_ig.svg"
                alt="instagram"
              />
              <IconLink
                href="https://x.com/botspot3d"
                src="/link_x.svg"
                alt="x"
              />
              <IconLink
                href="https://linkedin.com/company/botspot-3d-scan/"
                src="/link_linkedin.svg"
                alt="linkedin"
              />
            </Box>
          </Grid>
        </Container>
      </footer>
      <footer className="bg-common-black">
        <Grid container py={3} maxWidth="xl" mx="auto">
          <Grid
            flexBasis="100%"
            display="flex"
            gap={3}
            xs={12}
            md={10}
            mx="auto"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'center', md: 'flex-end' }}
            item
          >
            <Text mr={{ xs: 0, md: 'auto' }}>
              Copyright © 2024 botspot, All rights reserved
            </Text>
            <Text>Privacy Policy</Text>
            <Text href="/terms-and-conditions">Terms and Conditions</Text>
            <Text>Legal Notice</Text>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};
