'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { BannerImage } from '../BannerImage/BannerImage';

type SecondaryBlockProps = {
  assetUrl?: string;
  headline?: string;
  subline?: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  disableGutter?: boolean;
};
export const SecondaryBlock: FC<SecondaryBlockProps> = ({
  assetUrl,
  headline,
  subline,
  primaryCta,
  secondaryCta,
  disableGutter = false,
}) => (
  <Box textAlign={{ xs: 'center', md: 'left' }}>
    {assetUrl && <BannerImage src={assetUrl} alt="" />}

    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="center"
        my={{ xs: 2, sm: 3 }}
        {...(!disableGutter && { mb: { xs: 10, sm: 15 } })}
      >
        <Grid
          item
          xs={10}
          xl={12}
          textAlign={{ xs: 'center', md: 'left' }}
          mx="auto"
        >
          <Typography variant="h2">{headline}</Typography>
          <Typography
            variant="body1"
            mb={{ xs: 3, sm: 2 }}
            mt={{ xs: 1, sm: 0.5 }}
          >
            {subline}
          </Typography>
          {(primaryCta || secondaryCta) && (
            <Box display="flex">
              <Grid
                container
                spacing={2}
                justifyContent={{ xs: 'center', md: 'left' }}
              >
                {primaryCta && <Grid item>{primaryCta}</Grid>}
                {secondaryCta && <Grid item>{secondaryCta}</Grid>}
              </Grid>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  </Box>
);
