'use client';

import { Box, Grid, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

import { BlockVideo } from '@/app/components/BlockVideo/BlockVideo';

type SecondaryBlockProps = {
  assetUrl?: string;
  headline?: string;
  subline?: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  hasParent?: boolean;
  autoplay?: boolean;
  scrollable?: boolean;
  fullHeight?: boolean;
  banner?: boolean;
  objectFit?: string;
};
export const SecondaryBlock: FC<SecondaryBlockProps> = ({
  assetUrl,
  headline,
  subline,
  primaryCta,
  secondaryCta,
  hasParent = false,
  autoplay = true,
  scrollable = false,
  fullHeight = false,
  banner = false,
  objectFit = 'cover',
}) => (
  <Box textAlign={{ xs: 'center', md: 'left' }}>
    {assetUrl && (
      <BlockVideo
        assetUrl={assetUrl}
        autoplay={autoplay}
        scrollable={scrollable}
        fullHeight={fullHeight}
        objectFit={objectFit}
      />
    )}

    <Grid
      container
      maxWidth="xl"
      justifyContent={banner ? 'flex-end' : 'flex-start'}
      mx="auto"
      mb={hasParent ? 0 : { xs: 10, sm: 15 }}
      mt={{ xs: 2, sm: 3 }}
      px={3}
    >
      <Grid
        item
        textAlign={{ xs: 'center', md: 'left' }}
        xs={12}
        md={7}
        xl={hasParent ? 12 : banner ? 6 : 10}
        ml={banner ? 'auto' : 0}
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
  </Box>
);
