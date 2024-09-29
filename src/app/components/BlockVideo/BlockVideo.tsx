'use client';

import { FC } from 'react';
import { BannerImage } from '../BannerImage/BannerImage';
import { ScrollableVideo } from '../ScrollableVideo/ScrollableVideo';
import { Box } from '@mui/material';

type SecondaryBlockProps = {
  assetUrl?: string;
  autoplay?: boolean;
  scrollable?: boolean;
  fullHeight?: boolean;
};
export const BlockVideo: FC<SecondaryBlockProps> = ({
  assetUrl,
  autoplay = true,
  scrollable = false,
  fullHeight = false,
}) => (
  <Box
    height={
      fullHeight
        ? scrollable
          ? '300vh'
          : '100vh'
        : { xs: 1024, md: 768, lg: 800 }
    }
  >
    {assetUrl && scrollable ? (
      <ScrollableVideo videoSrc={assetUrl} autoplay={autoplay} />
    ) : assetUrl?.split('.').pop() === 'mp4' ? (
      <video
        preload="preload"
        className="object-cover w-full h-full"
        autoPlay={autoplay}
        muted
        loop
      >
        <source type="video/mp4" src={assetUrl} />
      </video>
    ) : (
      assetUrl && <BannerImage src={assetUrl} alt="" />
    )}
  </Box>
);
