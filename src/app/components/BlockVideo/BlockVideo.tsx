'use client';

import { FC } from 'react';
import { Box } from '@mui/material';

import { ScrollableVideo } from '@/app/components/ScrollableVideo/ScrollableVideo';

type SecondaryBlockProps = {
  assetUrl?: string;
  autoplay?: boolean;
  scrollable?: boolean;
  fullHeight?: boolean;
  objectFit?: string;
};
export const BlockVideo: FC<SecondaryBlockProps> = ({
  assetUrl,
  autoplay = true,
  scrollable = false,
  fullHeight = false,
  objectFit = 'cover',
}) => {
  const className = `w-full h-full object-${objectFit} xs:min-h-[1024px] md:min-h-[768px] lg:min-h-[800px]`;

  if (assetUrl && scrollable) {
    return <ScrollableVideo fileName={assetUrl} />;
  }

  return assetUrl?.split('.').pop() === 'mp4' ? (
    <Box height={fullHeight ? '100vh' : { xs: 1024, md: 768, lg: 800 }}>
      <video className={className} autoPlay={autoplay} muted loop>
        <source type="video/mp4" src={assetUrl} />
      </video>
    </Box>
  ) : (
    assetUrl && (
      <Box height={fullHeight ? '100vh' : { xs: 1024, md: 768, lg: 800 }}>
        <img src={assetUrl} alt="" className={className} />
      </Box>
    )
  );
};
