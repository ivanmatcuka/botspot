'use client';

import { FC, useEffect, useRef } from 'react';

type ScrollableVideoProps = {
  videoSrc: string;
  autoplay?: boolean;
};
export const ScrollableVideo: FC<ScrollableVideoProps> = ({
  videoSrc,
  autoplay,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (autoplay || !video) return;

    const onScroll = () => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect || !containerRef.current) return;

      const progress = Math.min(
        Math.abs(Math.min(0, containerRect.top)) /
          (containerRef.current?.clientHeight - window.innerHeight),
        1,
      );
      const newTime = progress * video.duration;

      if (!isNaN(newTime) && newTime !== video.currentTime) {
        video.currentTime = newTime;
      }
    };

    const onSeeked = () => {
      animationFrameIdRef.current = window.requestAnimationFrame(onScroll);
    };

    animationFrameIdRef.current = window.requestAnimationFrame(onScroll);

    window.addEventListener('scroll', onScroll);
    video.addEventListener('seeked', onSeeked);

    return () => {
      animationFrameIdRef.current &&
        window.cancelAnimationFrame(animationFrameIdRef.current);

      window.removeEventListener('scroll', onScroll);
      video.removeEventListener('seeked', onSeeked);
    };
  }, []);

  return (
    <div className="h-full relative" ref={containerRef}>
      <div className="w-full h-[100vh] sticky top-0">
        <video
          ref={videoRef}
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
