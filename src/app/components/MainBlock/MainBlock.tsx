'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { BlockVideo } from '@/app/components/BlockVideo/BlockVideo';

type MainBlockProps = {
  assetUrl?: string;
  headline?: string;
  subline?: string;
  cta?: ReactNode;
  subAssetUrl?: string;
  autoplay?: boolean;
  scrollable?: boolean;
  fullHeight?: boolean;
  objectFit?: string;
};
export const MainBlock: FC<MainBlockProps> = ({
  assetUrl,
  headline,
  subline,
  cta,
  subAssetUrl,
  scrollable = false,
  autoplay = true,
  fullHeight = false,
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

    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="center"
        my={{ xs: 10, md: 20 }}
        xs={12}
        md={10}
        mx="auto"
        direction="column"
      >
        <Grid item textAlign={{ xs: 'center', md: 'left' }}>
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
