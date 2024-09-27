import { duration } from '@mui/material';
import { FC, RefObject, useEffect, useMemo, useRef, useState } from 'react';

type ScrollableVideoProps = {
  videoSrc: string;
  autoplay?: boolean;
};
export const ScrollableVideo: FC<ScrollableVideoProps> = ({
  videoSrc,
  autoplay,
}) => {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (autoplay || !video) return;

    const calculateElementInView = () => {
      const rect = video.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Deliberately not using Math.max here
      // so it only works when scrolling down
      const top = rect.top;
      const bottom = Math.min(rect.bottom, viewportHeight);

      const visibleHeight = bottom - top;
      const percentageInView = visibleHeight / elementHeight;

      return percentageInView ?? 0;
    };

    const isInCenter = () => {
      const rect = video.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementHeight = rect.height;

      const top = rect.top;
      const bottom = Math.min(rect.bottom, viewportHeight);

      // Check if the video is within the viewport
      if (top < 0 || bottom > viewportHeight) false;

      // Calculate the center point of the viewport
      const viewportCenter = viewportHeight / 2;

      // Calculate the center point of the video element
      const elementCenter = top + elementHeight / 2;

      // Check if the video is within a certain threshold of the viewport center
      const threshold = 100; // adjust this value as needed
      return Math.abs(elementCenter - viewportCenter) < threshold;
    };

    function scrollPlay() {
      console.log(calculateElementInView(), isInCenter());
      if (video && calculateElementInView() > 0) {
        const frameNumber = calculateElementInView() * video.duration;
        frameNumber && (video.currentTime = frameNumber);
      }

      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
  }, [videoSrc, autoplay, video]);

  return (
    <div className="relative h-full">
      <div className="w-full h-full absolute inset-0">
        <video
          ref={setVideo}
          preload="preload"
          className="w-full h-full object-cover"
          autoPlay={autoplay}
          muted
        >
          <source type="video/mp4" src={videoSrc} />
        </video>
      </div>
    </div>
  );
};
