'use client';

import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import {
  MediaBlock,
  MediaBlockProps,
} from '@/app/components/MediaBlock/MediaBlock';

type MainBlockProps = {
  headline?: string;
  subline?: string;
  cta?: ReactNode;
  subAssetUrl?: string;
  mediaBlockOptions?: MediaBlockProps;
  botomless?: boolean;
};
export const MainBlock: FC<MainBlockProps> = ({
  headline,
  subline,
  cta,
  subAssetUrl,
  mediaBlockOptions = {},
  botomless = false,
}) => (
  <Box textAlign={{ xs: 'center', md: 'left' }}>
    {mediaBlockOptions.assetUrl && <MediaBlock {...mediaBlockOptions} />}

    <Grid
      container
      justifyContent="center"
      mb={{ xs: botomless ? 0 : 10, md: botomless ? 0 : 20 }}
      mt={{ xs: 10, md: 20 }}
      mx="auto"
      maxWidth="xl"
      px={3}
    >
      <Grid item textAlign={{ xs: 'center', md: 'left' }} xs={12} md={10}>
        <Typography variant="body1" mb={2}>
          {subline}
        </Typography>
        <Typography variant="h2" mb={4}>
          {headline}
        </Typography>
        {cta}
        {subAssetUrl && (
          <Image
            src={subAssetUrl}
            width={800}
            height={800}
            alt=""
            className="object-contain w-full h-auto pt-[48px]"
          />
        )}
      </Grid>
    </Grid>
  </Box>
);
