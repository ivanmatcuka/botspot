'use client';

import { Grid, styled, Typography, TypographyProps } from '@mui/material';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
}));

const FooterTypography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  ...rest
}) => (
  <Typography variant="body2" color="white" {...rest}>
    {children}
  </Typography>
);

const SubFooter = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <Grid container py={8} xs={10} mx="auto">
        <Grid flexBasis={{ xs: '100%', md: '40%' }}>
          <Image width={184} height={74} src="/logo_white.svg" alt="logo" />
          <FooterTypography>botspot 3D Scan GmbH</FooterTypography>
          <FooterTypography>Bruno-Bürgel-Weg 134-144</FooterTypography>
          <FooterTypography>12439 Berlin</FooterTypography>
          <FooterTypography>+49 30 985 40 400</FooterTypography>
          <FooterTypography>mail@botspot.de</FooterTypography>
          <Grid
            container
            mt={3}
            spacing={3}
            display={{ xs: 'none', md: 'flex' }}
          >
            <Grid item>
              <Image
                width={32}
                height={32}
                src="/link_ig.svg"
                alt="instagram"
              />
            </Grid>
            <Grid item>
              <Image width={32} height={32} src="/link_x.svg" alt="x" />
            </Grid>
            <Grid item>
              <Image
                width={32}
                height={32}
                src="/link_linkedin.svg"
                alt="linkedin"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          flexBasis={{ xs: '100%', md: '20%' }}
          mt={{ xs: 5, md: 9.25 }}
        >
          <FooterTypography mb={2.5}>3D Scanner</FooterTypography>
          <FooterTypography>Botscan NEO</FooterTypography>
          <FooterTypography>3D Object</FooterTypography>
          <FooterTypography>3D Studio</FooterTypography>
        </Grid>
        <Grid
          item
          flexBasis={{ xs: '100%', md: '20%' }}
          mt={{ xs: 5, md: 9.25 }}
        >
          <FooterTypography mb={2.5}>Resources</FooterTypography>
          <FooterTypography>3D Scan Service</FooterTypography>
          <FooterTypography>Areas of Use</FooterTypography>
          <FooterTypography>What is 3D Scanning?</FooterTypography>
        </Grid>
        <Grid
          item
          flexBasis={{ xs: '100%', md: '20%' }}
          mt={{ xs: 5, md: 9.25 }}
        >
          <FooterTypography mb={2.5}>Company</FooterTypography>
          <FooterTypography>About Us</FooterTypography>
          <FooterTypography>Innovation Lab</FooterTypography>
          <FooterTypography>Careers</FooterTypography>
        </Grid>
        <Grid
          container
          mt={3}
          spacing={3}
          display={{ xs: 'flex', md: 'none' }}
          justifyContent="center"
        >
          <Grid item>
            <Image width={32} height={32} src="/link_ig.svg" alt="instagram" />
          </Grid>
          <Grid item>
            <Image width={32} height={32} src="/link_x.svg" alt="x" />
          </Grid>
          <Grid item>
            <Image
              width={32}
              height={32}
              src="/link_linkedin.svg"
              alt="linkedin"
            />
          </Grid>
        </Grid>
      </Grid>
      <SubFooter py={3} container>
        <Grid
          flexBasis="100%"
          display="flex"
          alignItems={{ xs: 'center', md: 'flex-end' }}
          gap={3}
          xs={10}
          mx="auto"
          flexDirection={{ xs: 'column', md: 'row' }}
          item
        >
          <FooterTypography mr="auto">
            Copyright © 2024 botspot, All rights reserved
          </FooterTypography>
          <FooterTypography>Privacy Policy</FooterTypography>
          <FooterTypography>Terms and Conditions</FooterTypography>
          <FooterTypography>Legal Notice</FooterTypography>
        </Grid>
      </SubFooter>
    </StyledFooter>
  );
};