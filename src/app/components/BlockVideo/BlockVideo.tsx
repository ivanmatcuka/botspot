'use client';

import { FC } from 'react';
import { BannerImage } from '../BannerImage/BannerImage';
import { ScrollableVideo } from '../ScrollableVideo/ScrollableVideo';

type SecondaryBlockProps = {
  assetUrl?: string;
  autoplay?: boolean;
  scrollable?: boolean;
};
export const BlockVideo: FC<SecondaryBlockProps> = ({
  assetUrl,
  autoplay = true,
  scrollable = false,
}) => (
  <>
    {assetUrl && scrollable ? (
      <ScrollableVideo videoSrc={assetUrl} autoplay={autoplay} />
    ) : assetUrl?.split('.').pop() === 'mp4' ? (
      <video
        preload="preload"
        className="object-cover w-full h-full"
        autoPlay={autoplay}
        muted
        loop
      >
        <source type="video/mp4" src={assetUrl} />
      </video>
    ) : (
      assetUrl && <BannerImage src={assetUrl} alt="" />
    )}
  </>
);
