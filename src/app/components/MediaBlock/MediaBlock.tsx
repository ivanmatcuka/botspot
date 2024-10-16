'use client';

import { ScrollableVideo } from '@/app/components/ScrollableVideo/ScrollableVideo';

import { FC } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

export type MediaBlockProps = {
  assetUrl: string;
  autoplay?: boolean;
  scrollable?: boolean;
  fullHeight?: boolean;
  objectFit?: 'contain' | 'cover';
  banner?: boolean;
};
export const MediaBlock: FC<MediaBlockProps> = ({
  assetUrl,
  autoplay = true,
  scrollable = false,
  fullHeight = false,
  objectFit = 'cover',
  banner = false,
}) => {
  const className = `w-full h-full md:min-h-[768px] lg:min-h-[800px] ${objectFit === 'cover' ? 'object-cover' : 'object-contain'} ${banner ? 'xs:min-h-[392px]' : 'xs:min-h-auto'}`;

  if (scrollable) {
    return <ScrollableVideo fileName={assetUrl} />;
  }

  return assetUrl.split('.').pop() === 'mp4' ? (
    <Box
      height={
        fullHeight ? '100vh' : { xs: banner ? 392 : 'auto', md: 768, lg: 800 }
      }
    >
      <video className={className} autoPlay={autoplay} muted loop>
        <source type="video/mp4" src={assetUrl} />
      </video>
    </Box>
  ) : (
    <Box
      height={
        fullHeight ? '100vh' : { xs: banner ? 392 : 'auto', md: 768, lg: 800 }
      }
    >
      <Image
        width={1920}
        height={1080}
        src={assetUrl}
        alt=""
        className={className}
        quality={100}
      />
    </Box>
  );
};
