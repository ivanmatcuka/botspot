'use client';

import { FC } from 'react';
import { Box } from '@mui/material';

import { ScrollableVideo } from '@/app/components/ScrollableVideo/ScrollableVideo';
import Image from 'next/image';

export type MediaBlockProps = {
  assetUrl?: string;
  autoplay?: boolean;
  scrollable?: boolean;
  fullHeight?: boolean;
};
export const MediaBlock: FC<MediaBlockProps> = ({
  assetUrl,
  autoplay = true,
  scrollable = false,
  fullHeight = false,
}) => {
  const className = `w-full h-full object-cover xs:min-h-[1024px] md:min-h-[768px] lg:min-h-[800px]`;

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
        <Image
          width={1920}
          height={1080}
          src={assetUrl}
          alt=""
          className={className}
        />
      </Box>
    )
  );
};
