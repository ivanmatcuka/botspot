import { FC, useCallback, useEffect, useRef, useState } from 'react';
import useDetectScroll from '@smakss/react-scroll-direction';

type ScrollableVideoProps = {
  videoSrc: string;
  autoplay?: boolean;
};
export const ScrollableVideo: FC<ScrollableVideoProps> = ({
  videoSrc,
  autoplay,
}) => {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollDir } = useDetectScroll({
    target: window,
  });

  const checkInViewport = useCallback(() => {
    if (!video) return;

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
    const threshold = 300; // adjust this value as needed
    return Math.abs(elementCenter - viewportCenter) < threshold;
  }, [video]);

  useEffect(() => {
    if (autoplay || !video) return;
    const newTime = videoProgress * video.duration;

    video.currentTime = isNaN(newTime) ? 0 : newTime;
  }, [autoplay, video, videoProgress]);

  useEffect(() => {
    const onScroll: EventListener = () => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect || !containerRef.current) return;

      const progress = Math.min(
        Math.abs(Math.min(0, containerRect.top)) /
          (containerRef.current?.clientHeight - window.innerHeight),
        1,
      );

      setVideoProgress(progress);
      setIsInViewport(!!checkInViewport());
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [video]);

  useEffect(() => {}, []);

  return (
    <div className="h-full relative" ref={containerRef}>
      <div className="w-full sticky top-0" ref={containerRef}>
        <video
          ref={setVideo}
          preload="preload"
          className="w-full object-cover"
          autoPlay={autoplay}
          muted
        >
          <source type="video/mp4" src={videoSrc} />
        </video>
      </div>
    </div>
  );
};
