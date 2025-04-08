import { Banner, MainBlock, PageContainer } from '@botspot/ui';
import { Box } from '@mui/material';
import { Metadata } from 'next';
import { Suspense } from 'react';

import { ExtraFooter } from '../../../components/ExtraFooter';
import { Jobs } from '../../../components/Jobs';

export const metadata: Metadata = {
  title: 'CAREERS – botspot',
};

export default function Careers() {
  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/img/banners/careers.webp',
        }}
        headline="Careers"
        sublineElement="We are always on the lookout for young talents as well as seasoned professionals."
      />

      <PageContainer mt={{ md: 15, xs: 10 }}>
        <MainBlock
          headline="We strive for innovative spirit and foster our open corporate culture. Feel free to check our openings below."
          subline="Open Positions"
        />
      </PageContainer>

      <Box maxWidth="xl" mx="auto">
        <Suspense>
          <Jobs />
        </Suspense>
      </Box>

      <ExtraFooter />
    </main>
  );
}
