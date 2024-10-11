import { MediaBlock } from './components/MediaBlock/MediaBlock';
import { PageContainer } from './components/PageContainer/PageContainer';

import { Box, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type ScrollableBlockProps = {
  assetUrl: string;
};
export const ScrollableBlock: FC<PropsWithChildren<ScrollableBlockProps>> = ({
  assetUrl,
  children,
}) => {
  return (
    <>
      <MediaBlock assetUrl={assetUrl} autoplay scrollable fullHeight />
      <Box>
        <PageContainer>{children}</PageContainer>
      </Box>
    </>
  );
};
