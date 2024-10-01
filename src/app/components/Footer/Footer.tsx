'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  TypographyProps,
} from '@mui/material';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

const FooterTypography: FC<PropsWithChildren<TypographyProps>> = (props) => (
  <Typography variant="body2" color="white" {...props} />
);

export const Footer = () => {
  return (
    <>
      <footer className="bg-info-main">
        <Container maxWidth="xl">
          <Grid container py={8} xs={12} md={10} mx="auto">
            <Grid item flexBasis={{ xs: '100%', md: '40%' }}>
              <Image width={184} height={74} src="/logo_white.svg" alt="logo" />
              <FooterTypography>botspot 3D Scan GmbH</FooterTypography>
              <FooterTypography>Bruno-Bürgel-Weg 134-144</FooterTypography>
              <FooterTypography>12439 Berlin</FooterTypography>
              <br />
              <FooterTypography>+49 30 985 40 400</FooterTypography>
              <br />
              <FooterTypography>mail@botspot.de</FooterTypography>
              <Box mt={3} display={{ xs: 'none', md: 'flex' }} gap={3}>
                <Image
                  width={32}
                  height={32}
                  src="/link_ig.svg"
                  alt="instagram"
                />
                <Image width={32} height={32} src="/link_x.svg" alt="x" />
                <Image
                  width={32}
                  height={32}
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
              <FooterTypography>3D Scanner</FooterTypography>
              <br />
              <FooterTypography>Botscan NEO</FooterTypography>
              <FooterTypography>3D Object</FooterTypography>
              <FooterTypography>3D Studio</FooterTypography>
            </Grid>
            <Grid
              item
              flexBasis={{ xs: '100%', md: '20%' }}
              mt={{ xs: 5, md: 9.25 }}
            >
              <FooterTypography>Resources</FooterTypography>
              <br />
              <FooterTypography>3D Scan Service</FooterTypography>
              <FooterTypography>Areas of Use</FooterTypography>
              <FooterTypography>What is 3D Scanning?</FooterTypography>
            </Grid>
            <Grid
              item
              flexBasis={{ xs: '100%', md: '20%' }}
              mt={{ xs: 5, md: 9.25 }}
            >
              <FooterTypography>Company</FooterTypography>
              <br />
              <FooterTypography>About Us</FooterTypography>
              <FooterTypography>Innovation Lab</FooterTypography>
              <FooterTypography>Careers</FooterTypography>
            </Grid>
            <Box
              mt={3}
              gap={3}
              display={{ xs: 'flex', md: 'none' }}
              justifyContent="center"
              mx="auto"
            >
              <Image
                width={32}
                height={32}
                src="/link_ig.svg"
                alt="instagram"
              />
              <Image width={32} height={32} src="/link_x.svg" alt="x" />
              <Image
                width={32}
                height={32}
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
            <FooterTypography mr={{ xs: 0, md: 'auto' }}>
              Copyright © 2024 botspot, All rights reserved
            </FooterTypography>
            <FooterTypography>Privacy Policy</FooterTypography>
            <FooterTypography>Terms and Conditions</FooterTypography>
            <FooterTypography>Legal Notice</FooterTypography>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};
