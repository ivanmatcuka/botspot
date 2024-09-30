/* eslint-disable @next/next/no-img-element */
'use client';

import { Box } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';

type ScrollableVideoProps = {
  fileName: string;
};
export const ScrollableVideo: FC<ScrollableVideoProps> = ({ fileName }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [frame, setFrame] = useState(0);
  const [isReady, setIsready] = useState(false);

  useEffect(() => {
    const prepareImages = async () => {
      let images: HTMLImageElement[] = [];

      const loadImage = (url: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = url;
          image.onload = () => resolve(image);
          image.onerror = () => reject('broken');
        });
      };

      for (var i = 0; i < Infinity; i++) {
        try {
          const image = await loadImage(
            `videos/${fileName}/${fileName}${i.toString().padStart(3, '0')}.jpg`,
          );
          images.push(image);
        } catch (e) {
          setIsready(true);
          break;
        }
      }

      setImages(images);
    };

    prepareImages();
  }, [fileName]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect || !containerRef.current) return;

      const progress = Math.min(
        Math.abs(Math.min(0, containerRect.top)) /
          (containerRef.current?.clientHeight - window.innerHeight),
        1,
      );

      const frameIndex = Math.floor(progress * (images.length - 1));

      if (!images[frameIndex]) return;
      setFrame(frameIndex);
    });
  }, [images]);

  return (
    <Box height={isReady ? '300vh' : '100vh'}>
      <div className="h-full relative" ref={containerRef}>
        <div className="w-full h-[100vh] xs:min-h-[1024px] md:min-h-[768px] lg:min-h-[800px] sticky top-0">
          {!isReady && (
            <div className="w-full h-full backdrop-blur-sm bg-white/30 absolute inset-0" />
          )}
          <img
            alt=""
            src={`/videos/${fileName}/${fileName}${frame.toString().padStart(3, '0')}.jpg`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Box>
  );
};
