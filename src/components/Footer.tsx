import { CustomPost } from '@/services';
import { getMenuBySlug } from '@/services/getMenuBySlug';
import { normalizeURL } from '@/utils/normalizeURL';
import { Box, Container, Grid, IconLink, Typography } from '@botspot/ui';
import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

type TextProps = {
  href?: string;
};
const Text: FC<PropsWithChildren<TextProps>> = ({
  children,
  href,
  ...props
}) => {
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
type FooterProps = {
  products: CustomPost[];
};
export const Footer: FC<FooterProps> = async ({ products }) => {
  const [resources, company, submenu, productsLink] = await Promise.all([
    getMenuBySlug('footer-resources'),
    getMenuBySlug('footer-company'),
    getMenuBySlug('footer-submenu'),
    getMenuBySlug('footer-products'),
  ]);

  return (
    <>
      <footer className="bg-info-main">
        <Container maxWidth="xl">
          <Grid md={10} mx="auto" py={8} xs={12} container>
            <Grid flexBasis={{ md: '40%', xs: '100%' }} item>
              <Image
                alt="logo"
                className="ml-[-8px]"
                height={74}
                loading="lazy"
                src="/logo_white.svg"
                width={184}
              />
              <Text>botspot 3D Scan GmbH</Text>
              <Text>Bruno-Bürgel-Weg 134-144</Text>
              <Text>12439 Berlin</Text>
              <br />
              <Text href="tel:+49 30 985 40 400">+49 30 985 40 400</Text>
              <br />
              <Text href="mailto:mail@botspot.de">mail@botspot.de</Text>
              <Box display={{ md: 'flex', xs: 'none' }} gap={3} mt={3}>
                <IconLink alt="ig" href="https://instagram.com/botspot3d/" />
                <IconLink alt="x" href="https://x.com/botspot3d" />
                <IconLink
                  alt="linkedin"
                  href="https://linkedin.com/company/botspot-3d-scan/"
                />
                <IconLink
                  alt="youtube"
                  href="https://www.youtube.com/@botspot3D"
                />
              </Box>
            </Grid>
            <Grid
              flexBasis={{ md: '20%', xs: '100%' }}
              mt={{ md: 9.25, xs: 5 }}
              pr={2}
              item
            >
              {productsLink?.map((item) => (
                <Text href={normalizeURL(item.url)} key={item.ID}>
                  {item.title}
                </Text>
              ))}
              <br />
              {products.map((product, index) => (
                <Text href={`/products/${product.slug}`} key={index}>
                  {product?.acf?.['full-name'] || product.title.rendered}
                </Text>
              ))}
            </Grid>
            <Grid
              flexBasis={{ md: '20%', xs: '100%' }}
              mt={{ md: 9.25, xs: 5 }}
              item
            >
              <Text>Resources</Text>
              <br />
              {resources?.map((item) => (
                <Text href={normalizeURL(item.url)} key={item.ID}>
                  {item.title}
                </Text>
              ))}
            </Grid>
            <Grid
              flexBasis={{ md: '20%', xs: '100%' }}
              mt={{ md: 9.25, xs: 5 }}
              item
            >
              <Text>Company</Text>
              <br />
              {company?.map((item) => (
                <Text href={normalizeURL(item.url)} key={item.ID}>
                  {item.title}
                </Text>
              ))}
            </Grid>
            <Box
              display={{ md: 'none', xs: 'flex' }}
              gap={3}
              justifyContent="center"
              mt={3}
              mx="auto"
            >
              <IconLink alt="ig" href="https://instagram.com/botspot3d/" />
              <IconLink alt="x" href="https://x.com/botspot3d" />
              <IconLink
                alt="linkedin"
                href="https://linkedin.com/company/botspot-3d-scan/"
              />
              <IconLink
                alt="youtube"
                href="https://www.youtube.com/@botspot3D"
              />
            </Box>
          </Grid>
        </Container>
      </footer>
      <footer className="bg-common-black">
        <Grid maxWidth="xl" mx="auto" py={3} container>
          <Grid
            alignItems={{ md: 'flex-end', xs: 'center' }}
            display="flex"
            flexBasis="100%"
            flexDirection={{ md: 'row', xs: 'column' }}
            gap={3}
            justifyContent={{ md: 'space-between', xs: 'center' }}
            md={10}
            mx="auto"
            xs={12}
            item
          >
            <Text>Copyright © 2024 botspot, All rights reserved</Text>
            <Box
              display="flex"
              flexDirection={{ md: 'row', xs: 'column' }}
              gap={3}
              textAlign="center"
            >
              {submenu?.map((item) => (
                <Text href={normalizeURL(item.url)} key={item.ID}>
                  {item.title}
                </Text>
              ))}
            </Box>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};
