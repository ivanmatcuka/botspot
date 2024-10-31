import { ScrollableVideo } from './ScrollableVideo';

import { PageContainer } from '@/app/components/PageContainer/PageContainer';

import { Box } from '@mui/material';
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
