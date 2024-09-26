'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { BannerImage } from '../BannerImage/BannerImage';
import { ScrollableVideo } from '../ScrollableVideo/ScrollableVideo';

type SecondaryBlockProps = {
  assetUrl?: string;
  headline?: string;
  subline?: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  disableGutter?: boolean;
  autoplay?: boolean;
  scrollable?: boolean;
};
export const SecondaryBlock: FC<SecondaryBlockProps> = ({
  assetUrl,
  headline,
  subline,
  primaryCta,
  secondaryCta,
  disableGutter = false,
  autoplay = true,
  scrollable = false,
}) => (
  <Box textAlign={{ xs: 'center', md: 'left' }}>
    <Box height={{ xs: 1024, md: 768, lg: 800 }}>
      {assetUrl && scrollable ? (
        <ScrollableVideo videoSrc={assetUrl} autoplay={autoplay} />
      ) : assetUrl?.split('.').pop() === 'mp4' ? (
        <video
          preload="preload"
          className="object-cover max-h-[800px] md:max-h-[768px] xs:max-h-[1024px]"
          autoPlay={autoplay}
          muted
        >
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src={assetUrl}
          />
        </video>
      ) : (
        assetUrl && <BannerImage src={assetUrl} alt="" />
      )}
    </Box>
    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="center"
        my={{ xs: 2, sm: 3 }}
        maxHeight={{ xs: 1024, md: 768, lg: 800 }}
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
