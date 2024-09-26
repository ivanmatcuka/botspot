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

    function scrollPlay() {
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
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src={videoSrc}
          />
        </video>
      </div>
    </div>
  );
};
