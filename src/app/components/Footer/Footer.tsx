import { getProducts } from '@/app/service';

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
      <Link className="hover:underline" href={href}>
        {children}
      </Link>
    );
  }

  return (
    <Typography color="white" variant="body2" {...props}>
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
  <Link className="hover:underline" href={href} target="_blank">
    <Image alt={alt} height={32} src={src} width={32} />
  </Link>
);

export const Footer = async () => {
  const { data: products } = await getProducts();

  return (
    <>
      <footer className="bg-info-main">
        <Container maxWidth="xl">
          <Grid md={10} mx="auto" py={8} xs={12} container>
            <Grid flexBasis={{ xs: '100%', md: '40%' }} item>
              <Image alt="logo" height={74} src="/logo_white.svg" width={184} />
              <Text>botspot 3D Scan GmbH</Text>
              <Text>Bruno-Bürgel-Weg 134-144</Text>
              <Text>12439 Berlin</Text>
              <br />
              <Text href="tel:+49 30 985 40 400">+49 30 985 40 400</Text>
              <br />
              <Text href="mailto:mail@botspot.de">mail@botspot.de</Text>
              <Box display={{ xs: 'none', md: 'flex' }} gap={3} mt={3}>
                <IconLink
                  alt="instagram"
                  href="https://instagram.com/botspot3d/"
                  src="/link_ig.svg"
                />
                <IconLink
                  alt="x"
                  href="https://x.com/botspot3d"
                  src="/link_x.svg"
                />
                <IconLink
                  alt="linkedin"
                  href="https://linkedin.com/company/botspot-3d-scan/"
                  src="/link_linkedin.svg"
                />
              </Box>
            </Grid>
            <Grid
              flexBasis={{ xs: '100%', md: '20%' }}
              mt={{ xs: 5, md: 9.25 }}
              item
            >
              <Text href="/products">3D Scanner</Text>
              <br />
              {products.map((product, index) => (
                <Text href={`/products/${product.slug}`} key={index}>
                  {product.title.rendered}
                </Text>
              ))}
            </Grid>
            <Grid
              flexBasis={{ xs: '100%', md: '20%' }}
              mt={{ xs: 5, md: 9.25 }}
              item
            >
              <Text>Resources</Text>
              <br />
              <Text href="/service">3D Scan Service</Text>
              <Text href="/areas">Areas of Use</Text>
              <Text href="/learn">What is 3D Scanning?</Text>
            </Grid>
            <Grid
              flexBasis={{ xs: '100%', md: '20%' }}
              mt={{ xs: 5, md: 9.25 }}
              item
            >
              <Text>Company</Text>
              <br />
              <Text href="/about">About Us</Text>
              <Text href="/about/innovation-lab">Innovation Lab</Text>
              <Text href="/about/careers">Careers</Text>
            </Grid>
            <Box
              display={{ xs: 'flex', md: 'none' }}
              gap={3}
              justifyContent="center"
              mt={3}
              mx="auto"
            >
              <IconLink
                alt="instagram"
                href="https://instagram.com/botspot3d/"
                src="/link_ig.svg"
              />
              <IconLink
                alt="x"
                href="https://x.com/botspot3d"
                src="/link_x.svg"
              />
              <IconLink
                alt="linkedin"
                href="https://linkedin.com/company/botspot-3d-scan/"
                src="/link_linkedin.svg"
              />
            </Box>
          </Grid>
        </Container>
      </footer>
      <footer className="bg-common-black">
        <Grid maxWidth="xl" mx="auto" py={3} container>
          <Grid
            alignItems={{ xs: 'center', md: 'flex-end' }}
            display="flex"
            flexBasis="100%"
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={3}
            md={10}
            mx="auto"
            xs={12}
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
