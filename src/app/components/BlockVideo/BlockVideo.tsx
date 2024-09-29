'use client';

import { FC } from 'react';
import { BannerImage } from '../BannerImage/BannerImage';
import { ScrollableVideo } from '../ScrollableVideo/ScrollableVideo';
import { Box } from '@mui/material';

type SecondaryBlockProps = {
  assetUrl?: string;
  autoplay?: boolean;
  scrollable?: boolean;
};
export const BlockVideo: FC<SecondaryBlockProps> = ({
  assetUrl,
  autoplay = true,
  scrollable = false,
}) => (
  <>
    {assetUrl && scrollable ? (
      <Box height="100vh">
        <ScrollableVideo videoSrc={assetUrl} autoplay={autoplay} />
      </Box>
    ) : assetUrl?.split('.').pop() === 'mp4' ? (
      <Box height="100vh">
        <video
          preload="preload"
          className="object-cover w-full h-full"
          autoPlay={autoplay}
          muted
          loop
        >
          <source type="video/mp4" src={assetUrl} />
        </video>
      </Box>
    ) : (
      assetUrl && (
        <Box height={{ xs: 1024, md: 768, lg: 800 }}>
          <BannerImage src={assetUrl} alt="" />
        </Box>
      )
    )}
  </>
);
