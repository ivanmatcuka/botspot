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
      <ScrollableVideo videoSrc={assetUrl} />
    ) : assetUrl?.split('.').pop() === 'mp4' ? (
      <video
        preload="preload"
        className="object-cover w-full h-full xs:min-h-[1024px] md:min-h-[768px] lg:min-h-[800px]"
        autoPlay={autoplay}
        muted
        loop
      >
        <source type="video/mp4" src={assetUrl} />
      </video>
    ) : (
      assetUrl && (
        <BannerImage
          src={assetUrl}
          alt=""
          className="xs:min-h-[1024px] md:min-h-[768px] lg:min-h-[800px]"
        />
      )
    )}
  </Box>
);