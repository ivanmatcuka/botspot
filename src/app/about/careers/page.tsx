import { ExtraFooter } from './ExtraFooter';
import { Jobs } from './Jobs';

import { Box } from '@mui/material';
import { Metadata } from 'next';
import { Suspense } from 'react';

import { Banner } from '@/components/Banner';
import { MainBlock } from '@/components/MainBlock';
import { PageContainer } from '@/components/PageContainer';

export const metadata: Metadata = {
  title: 'CAREERS – botspot',
};

export default function Careers() {
  return (
    <main className="">
      <Banner
        headline="Careers"
        mediaBlockOptions={{
          assetUrl: '/img/banners/careers.png',
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
