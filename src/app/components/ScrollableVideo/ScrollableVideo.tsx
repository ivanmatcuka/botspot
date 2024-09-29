import { FC, useEffect, useRef, useState } from 'react';

type ScrollableVideoProps = {
  videoSrc: string;
  autoplay?: boolean;
};
export const ScrollableVideo: FC<ScrollableVideoProps> = ({
  videoSrc,
  autoplay,
}) => {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll: EventListener = () => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect || !containerRef.current) return;

      const progress = Math.min(
        Math.abs(Math.min(0, containerRect.top)) /
          (containerRef.current?.clientHeight - window.innerHeight),
        1,
      );

      if (autoplay || !video) return;
      const newTime = progress * video.duration;

      video.currentTime = isNaN(newTime) ? 0 : newTime;
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [video]);

  return (
    <div className="h-full relative" ref={containerRef}>
      <div className="w-full h-[100vh] sticky top-0" ref={containerRef}>
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
