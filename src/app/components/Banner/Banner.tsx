'use client';

import { Box, Container, Grid, styled, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { ScrollableVideo } from '../ScrollableVideo/ScrollableVideo';
import { BlockVideo } from '../BlockVideo/BlockVideo';

const AbsoluteContainer = styled(Box)({
  position: 'absolute',
  inset: 0,
});

const Gradient = styled(AbsoluteContainer)({
  backgroundImage: 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
});

type BannerProps = {
  assetUrl: string;
  headline: string;
  subline: string;
  primaryCta: ReactNode;
  secondaryCta: ReactNode;
  autoplay?: boolean;
  scrollable?: boolean;
};
export const Banner: FC<BannerProps> = ({
  assetUrl,
  headline,
  subline,
  primaryCta,
  secondaryCta,
  autoplay = true,
}) => (
  <Box position="relative">
    {assetUrl && (
      <BlockVideo
        assetUrl={assetUrl}
        autoplay={autoplay}
        scrollable={false}
        fullHeight
      />
    )}

    <Gradient />
    <Box
      position="absolute"
      top={0}
      right={0}
      bottom={0}
      left={0}
      maxWidth="xl"
      mx="auto"
    >
      <Grid container alignItems="end" justifyContent="end" height="100%">
        <Grid item xs={12} md={8} mb={{ xs: 26, md: 15, lg: 29 }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={{ xs: 'center', md: 'left' }}
          >
            <Typography variant="h1" fontWeight="medium" color="white">
              {headline}
            </Typography>
            <Typography
              variant="body1"
              mb={{ xs: 3, md: 2 }}
              mt={{ xs: 1, md: 0.5 }}
              color="white"
            >
              {subline}
            </Typography>
            <Box display="flex" mt={{ xs: 3, md: 8 }}>
              <Grid
                container
                spacing={2}
                justifyContent={{ xs: 'center', md: 'left' }}
                alignItems="center"
              >
                <Grid item>{primaryCta}</Grid>
                <Grid item>{secondaryCta}</Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Box>
);
