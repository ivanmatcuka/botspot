import { getMenuBySlug } from '@/services/getMenuBySlug';
import { getPage } from '@/services/getPage';
import { normalizeURL } from '@/utils/normalizeURL';
import { CustomPost } from '@botspot/ui';
import {
  Box,
  Container,
  Grid,
  LegacyPostContainer,
  Typography,
} from '@botspot/ui';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { WPBlocks } from './WPBlocks';

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

  const page = await getPage('footer-contacts');
  const blocks = page?.block_data;

  return (
    <>
      <footer className="bg-info-main">
        <Container maxWidth="xl">
          <Grid md={10} mx="auto" py={8} xs={12} container>
            <Grid flexBasis={{ md: '40%', xs: '100%' }} item>
              <LegacyPostContainer>
                {blocks && <WPBlocks blocks={blocks} />}
              </LegacyPostContainer>
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
