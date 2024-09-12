import { Grid2, styled, Typography, TypographyProps } from '@mui/material';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
}));

const FooterTypography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  ...rest
}) => {
  return (
    <Typography variant="body2" color="white" {...rest}>
      {children}
    </Typography>
  );
};

const SubFooter = styled(Grid2)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <Grid2 container py={8} px={1}>
        <Grid2 flexBasis="40%">
          <Image width={184} height={74} src="/logo_white.svg" alt="logo" />
          <FooterTypography>botspot 3D Scan GmbH</FooterTypography>
          <FooterTypography>Bruno-Bürgel-Weg 134-144</FooterTypography>
          <FooterTypography>12439 Berlin</FooterTypography>
          <FooterTypography>+49 30 985 40 400</FooterTypography>
          <FooterTypography>mail@botspot.de</FooterTypography>
          <Grid2 container mt={3} spacing={3}>
            <Grid2>
              <Image
                width={32}
                height={32}
                src="/link_ig.svg"
                alt="instagram"
              />
            </Grid2>
            <Grid2>
              <Image width={32} height={32} src="/link_x.svg" alt="x" />
            </Grid2>
            <Grid2>
              <Image
                width={32}
                height={32}
                src="/link_linkedin.svg"
                alt="linkedin"
              />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 flexBasis="20%" mt={9.25}>
          <FooterTypography mb={2.5}>3D Scanner</FooterTypography>
          <FooterTypography>Botscan NEO</FooterTypography>
          <FooterTypography>3D Object</FooterTypography>
          <FooterTypography>3D Studio</FooterTypography>
        </Grid2>
        <Grid2 flexBasis="20%" mt={9.25}>
          <FooterTypography mb={2.5}>Resources</FooterTypography>
          <FooterTypography>3D Scan Service</FooterTypography>
          <FooterTypography>Areas of Use</FooterTypography>
          <FooterTypography>What is 3D Scanning?</FooterTypography>
        </Grid2>
        <Grid2 flexBasis="20%" mt={9.25}>
          <FooterTypography mb={2.5}>Company</FooterTypography>
          <FooterTypography>About Us</FooterTypography>
          <FooterTypography>Innovation Lab</FooterTypography>
          <FooterTypography>Careers</FooterTypography>
        </Grid2>
      </Grid2>
      <SubFooter py={3} px={1} container>
        <Grid2
          flexBasis="100%"
          display="flex"
          justifyContent="flex-end"
          gap={3}
        >
          <FooterTypography mr="auto">
            Copyright © 2024 botspot, All rights reserved
          </FooterTypography>
          <FooterTypography>Privacy Policy</FooterTypography>
          <FooterTypography>Terms and Conditions</FooterTypography>
          <FooterTypography>Legal Notice</FooterTypography>
        </Grid2>
      </SubFooter>
    </StyledFooter>
  );
};
