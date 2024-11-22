'use client';

import { Skeleton } from '@mui/material';
import { FC, MediaHTMLAttributes, useState } from 'react';

type SkeletonVideoProps = {
  videoSrc: string;
} & MediaHTMLAttributes<HTMLVideoElement>;
export const SkeletonVideo: FC<SkeletonVideoProps> = ({
  videoSrc,
  className,
  ...props
}: SkeletonVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <Skeleton
        className={`rounded-xl absolute inset-0 ${isLoaded && '!hidden'} z-10`}
        height={'100%'}
        variant="rectangular"
      />
      <video
        className={`w-full h-full relative ${className}`}
        src={videoSrc}
        controls
        onLoadedData={() => {
          console.log('can play');
          setIsLoaded(true);
        }}
        {...props}
      />
    </div>
  );
};
