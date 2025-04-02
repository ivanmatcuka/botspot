'use client';

import { Skeleton } from '@mui/material';
import { FC, MediaHTMLAttributes, useEffect, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

type SkeletonVideoProps = {
  videoSrc: string;
} & MediaHTMLAttributes<HTMLVideoElement>;
export const SkeletonVideo: FC<SkeletonVideoProps> = ({
  videoSrc,
  className = '',
  autoPlay,
  ...props
}: SkeletonVideoProps) => {
  const video = useRef<HTMLVideoElement>(null);
  const { inViewport } = useInViewport(video);

  useEffect(() => {
    if (!autoPlay) return;

    if (inViewport) {
      video.current?.play();
    } else {
      video.current?.pause();
    }
  }, [autoPlay, inViewport, videoSrc]);

  return (
    <div className={`relative ${className}`}>
      <Skeleton
        className={`absolute inset-0`}
        height={'100%'}
        variant="rectangular"
      />
      <video
        className={`w-full h-full relative ${className}`}
        preload="none"
        ref={video}
        src={videoSrc}
        playsInline
        {...props}
      />
    </div>
  );
};
