'use client';

import Image from 'next/image';
import { FC } from 'react';
import { Box } from '@mui/material';

export type MediaBlockProps = {
  assetUrl?: string;
  autoplay?: boolean;
  fullHeight?: boolean;
  objectFit?: 'contain' | 'cover';
  banner?: boolean;
};
export const MediaBlock: FC<MediaBlockProps> = ({
  assetUrl,
  autoplay = true,
  fullHeight = false,
  objectFit = 'cover',
  banner = false,
}) => {
  if (!assetUrl) return null;
  const className = `w-full h-full md:min-h-[768px] lg:min-h-[800px] ${objectFit === 'cover' ? 'object-cover' : 'object-contain'} ${banner ? 'xs:min-h-[392px]' : 'xs:min-h-auto'}`;

  const height = fullHeight
    ? '100vh'
    : { xs: banner ? 392 : 'auto', md: 768, lg: 800 };

  return assetUrl.split('.').pop() === 'mp4' ? (
    <Box height={height}>
      <video className={className} autoPlay={autoplay} muted loop>
        <source type="video/mp4" src={assetUrl} />
      </video>
    </Box>
  ) : (
    <Box height={height}>
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
