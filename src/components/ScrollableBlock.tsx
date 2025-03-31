import { ScrollableVideo } from './ScrollableVideo';

import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { PageContainer } from '@/components/PageContainer';

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
