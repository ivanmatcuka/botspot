import { PageContainer } from './components/PageContainer/PageContainer';
import { ScrollableVideo } from './components/ScrollableVideo/ScrollableVideo';

import { Box, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type ScrollableBlockProps = {
  imagesUrls?: string[];
};
export const ScrollableBlock: FC<PropsWithChildren<ScrollableBlockProps>> = ({
  imagesUrls,
  children,
}) => {
  return (
    <>
      <ScrollableVideo imagesUrls={imagesUrls} />
      <Box>
        <PageContainer>{children}</PageContainer>
      </Box>
    </>
  );
};
