'use client';

import { SkeletonVideo } from './SkeletonVideo';

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
      <SkeletonVideo
        autoPlay={autoplay}
        className={classes}
        controls={false}
        videoSrc={assetUrl}
        loop
        muted
        playsInline
      />
    </Box>
  ) : (
    <Box className={containerClassName} height={height}>
      <Image
        alt=""
        className={classes}
        height={1080}
        loading="lazy"
        quality={80}
        src={assetUrl}
        width={1920}
      />
    </Box>
  );
};
