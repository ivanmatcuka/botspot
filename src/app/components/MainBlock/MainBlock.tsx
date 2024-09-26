'use client';

import { Box, Container, Grid, styled, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { BannerImage } from '../BannerImage/BannerImage';
import { ScrollableVideo } from '../ScrollableVideo/ScrollableVideo';

type MainBlockProps = {
  assetUrl?: string;
  headline?: string;
  subline?: string;
  cta?: ReactNode;
  subAssetUrl?: string;
  autoplay?: boolean;
  scrollable?: boolean;
};
export const MainBlock: FC<MainBlockProps> = ({
  assetUrl,
  headline,
  subline,
  cta,
  subAssetUrl,
  scrollable = false,
  autoplay = true,
}) => (
  <Box textAlign={{ xs: 'center', md: 'left' }}>
    {assetUrl && (
      <Box height={{ xs: 1024, md: 768, lg: 800 }}>
        {scrollable ? (
          <ScrollableVideo videoSrc={assetUrl} autoplay={autoplay} />
        ) : assetUrl.split('.').pop() === 'mp4' ? (
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
          <BannerImage src={assetUrl} alt="" />
        )}
      </Box>
    )}

    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="center"
        my={{ xs: 10, md: 20 }}
        direction="column"
      >
        <Grid item xs={12} textAlign={{ xs: 'center', md: 'left' }}>
          <Typography variant="body1" mb={2}>
            {subline}
          </Typography>
          <Typography variant="h2" mb={4}>
            {headline}
          </Typography>
          {cta}
        </Grid>
        {subAssetUrl && (
          <Grid item flex={1} mt={6} maxHeight={{ xs: 800, md: 768, lg: 1024 }}>
            <Image
              src={subAssetUrl}
              width={800}
              height={800}
              alt=""
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  </Box>
);
