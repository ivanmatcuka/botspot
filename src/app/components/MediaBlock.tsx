'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

export type MediaBlockProps = {
  assetUrl?: string;
  autoplay?: boolean;
  fullHeight?: boolean;
  objectFit?: 'contain' | 'cover';
  banner?: boolean;
  containerClassName?: string;
};
export const MediaBlock: FC<MediaBlockProps> = ({
  assetUrl,
  autoplay = true,
  fullHeight = false,
  objectFit = 'cover',
  banner = false,
  containerClassName,
}) => {
  if (!assetUrl) return null;
  const classes = `w-full h-full md:min-h-[768px] lg:min-h-[800px] ${objectFit === 'cover' ? 'object-cover' : 'object-contain'} ${banner ? 'xs:min-h-[420px]' : 'xs:min-h-auto'}`;

  const height = fullHeight
    ? '100vh'
    : { xs: banner ? 420 : 'auto', md: 768, lg: 800 };

  const isVideo = ['mp4', 'mov', 'webm'].some((ext) => assetUrl.endsWith(ext));

  return isVideo ? (
    <Box className={containerClassName} height={height}>
      <video autoPlay={autoplay} className={classes} loop muted playsInline>
        <source src={assetUrl} type="video/mp4" />
      </video>
    </Box>
  ) : (
    <Box className={containerClassName} height={height}>
      <Image
        alt=""
        className={classes}
        height={1080}
        quality={100}
        src={assetUrl}
        width={1920}
      />
    </Box>
  );
};
