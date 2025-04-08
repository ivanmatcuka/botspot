'use client';

import { Skeleton } from '@mui/material';
import { FC, MediaHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';

export type SkeletonVideoProps = {
  videoSrc: string;
} & MediaHTMLAttributes<HTMLVideoElement>;
export const SkeletonVideo: FC<SkeletonVideoProps> = ({
  autoPlay,
  className = '',
  videoSrc,
  ...props
}: SkeletonVideoProps) => {
  const video = useRef<HTMLVideoElement>(null);
  const { inViewport } = useInViewport(video);
  const [isLoaded, setIsloaded] = useState(false);

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
      {!isLoaded && (
        <Skeleton
          className={`absolute inset-0`}
          height={'100%'}
          variant="rectangular"
        />
      )}
      <video
        className={`w-full h-full relative ${className}`}
        onLoad={() => setIsloaded(true)}
        preload="none"
        ref={video}
        src={videoSrc}
        playsInline
        {...props}
      />
    </div>
  );
};
