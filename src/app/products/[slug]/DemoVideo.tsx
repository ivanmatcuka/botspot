'use client';

import { Skeleton } from '@mui/material';
import { useState } from 'react';

export const DemoVideo = ({ videoSrc }: { videoSrc: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      <Skeleton
        className={`rounded-xl absolute inset-0 ${isLoaded && '!hidden'}`}
        height={'100%'}
        variant="rectangular"
      />
      <video
        className={`w-full h-full invisible ${isLoaded && '!visible'}`}
        src={videoSrc}
        controls
        onLoadedMetadata={() => setIsLoaded(true)}
      />
    </div>
  );
};
