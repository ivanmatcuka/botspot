'use client';

import { Skeleton } from '@mui/material';
import { FC, MediaHTMLAttributes } from 'react';

type SkeletonVideoProps = {
  videoSrc: string;
} & MediaHTMLAttributes<HTMLVideoElement>;
export const SkeletonVideo: FC<SkeletonVideoProps> = ({
  videoSrc,
  className,
  ...props
}: SkeletonVideoProps) => {
  return (
    <div className={`relative ${className}`}>
      <Skeleton
        className={`absolute inset-0`}
        height={'100%'}
        variant="rectangular"
      />
      <video
        className={`w-full h-full relative ${className}`}
        src={videoSrc}
        controls
        {...props}
      />
    </div>
  );
};
