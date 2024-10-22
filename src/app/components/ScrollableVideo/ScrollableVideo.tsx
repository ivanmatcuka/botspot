/* eslint-disable @next/next/no-img-element */
'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import { FC, useEffect, useMemo, useRef, useState } from 'react';

type ScrollableVideoProps = {
  imagesUrls?: string[];
};
export const ScrollableVideo: FC<ScrollableVideoProps> = ({ imagesUrls }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [frame, setFrame] = useState(0);
  const [isReady, setIsready] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down('xl'));

  useEffect(() => {
    const prepareImages = async () => {
      const loadImage = (url: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
          const image = new Image();
          image.src = url;
          image.onload = () => resolve(image);
          image.onerror = () => reject('broken');
        });

      const imagePromises = [];

      for (let imageUrl of [...(imagesUrls ?? [])].sort((a, b) => {
        return a.localeCompare(b);
      })) {
        const imagePromise = loadImage(imageUrl);
        imagePromises.push(imagePromise);
      }

      setImages(await Promise.all(imagePromises));
      setIsready(true);
    };

    prepareImages();
  }, [imagesUrls]);

  const isCollapsed = useMemo(
    () => !isReady || (!matches && hasScrolled),
    [isReady, hasScrolled, matches],
  );

  useEffect(() => {
    const onScroll = () => {
      if (isCollapsed) return;

      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect || !containerRef.current) return;

      const progress = Math.min(
        Math.abs(Math.min(0, containerRect.top)) /
          (containerRef.current?.clientHeight - window.innerHeight),
        1,
      );

      const frameIndex = Math.floor(progress * (images.length - 1));

      if (
        frameIndex === (imagesUrls?.length ?? 0) - 1 &&
        containerRect.top < -window.innerHeight * 3
      ) {
        setHasScrolled(true);
      }

      if (!images[frameIndex]) return;
      setFrame(frameIndex);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [images, hasScrolled, isCollapsed, imagesUrls]);

  return (
    <Box height={isCollapsed ? '100vh' : '300vh'}>
      <div className="h-full relative" ref={containerRef}>
        <div className="w-full h-[100vh] xs:min-h-[1024px] md:min-h-[768px] lg:min-h-[800px] sticky top-0">
          {!isReady && (
            <div className="w-full h-full backdrop-blur-sm bg-white/30 absolute inset-0" />
          )}
          <img
            alt=""
            src={images?.[frame]?.src}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Box>
  );
};
