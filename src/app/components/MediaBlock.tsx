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
      <video autoPlay={autoplay} className={className} loop muted>
        <source src={assetUrl} type="video/mp4" />
      </video>
    </Box>
  ) : (
    <Box height={height}>
      <Image
        alt=""
        className={className}
        height={1080}
        quality={100}
        src={assetUrl}
        width={1920}
      />
    </Box>
  );
};
