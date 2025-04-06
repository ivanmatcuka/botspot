import { ExtraFooter } from '../../../components/ExtraFooter';
import { Jobs } from '../../../components/Jobs';

import { Banner, MainBlock, PageContainer } from '@botspot/ui';
import { Box } from '@mui/material';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'CAREERS – botspot',
};

export default function Careers() {
  return (
    <main className="">
      <Banner
        headline="Careers"
        mediaBlockOptions={{
          assetUrl: '/img/banners/careers.webp',
        }}
        sublineElement="We are always on the lookout for young talents as well as seasoned professionals."
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
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
