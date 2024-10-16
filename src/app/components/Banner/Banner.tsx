import {
  MediaBlock,
  MediaBlockProps,
} from '@/app/components/MediaBlock/MediaBlock';

import { Box, Grid, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type BannerProps = {
  headline: string;
  subline: string;
  primaryCta: ReactNode;
  secondaryCta: ReactNode;
  mediaBlockOptions?: Omit<MediaBlockProps, 'fullHeight'>;
};
export const Banner: FC<BannerProps> = ({
  headline,
  subline,
  primaryCta,
  secondaryCta,
  mediaBlockOptions,
}) => (
  <Box position="relative" minHeight={{ xs: '100vh', md: 768, lg: 800 }}>
    {mediaBlockOptions && <MediaBlock {...mediaBlockOptions} fullHeight />}

    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
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
        <Grid
          item
          xs={12}
          md={6}
          mb={{ xs: 'auto', md: 15, lg: 29 }}
          mt={{ xs: 'auto', md: 0 }}
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
        </Grid>
        <Grid xs={0} md={1} />
      </Grid>
    </Box>
  </Box>
);
