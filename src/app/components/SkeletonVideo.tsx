'use client';

import { Skeleton } from '@mui/material';
import { FC, MediaHTMLAttributes, useRef, useState } from 'react';

type SkeletonVideoProps = {
  videoSrc: string;
} & MediaHTMLAttributes<HTMLVideoElement>;
export const SkeletonVideo: FC<SkeletonVideoProps> = ({
  videoSrc,
  className,
  ...props
}: SkeletonVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`relative ${className}`}>
      <video
        className={`w-full h-full relative ${className}`}
        ref={videoRef}
        src={videoSrc}
        controls
        onLoadedData={() => {
          if (videoRef.current?.readyState !== 4) return;
          setIsLoaded(true);
        }}
        {...props}
      />
      <Skeleton
        className={`rounded-xl absolute inset-0 ${isLoaded && '!hidden'} z-10`}
        height={'100%'}
        variant="rectangular"
      />
    </div>
  );
};
