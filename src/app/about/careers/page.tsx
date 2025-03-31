import { ExtraFooter } from './ExtraFooter';
import { Jobs } from './Jobs';

import { Box, Grid } from '@mui/material';
import { Metadata } from 'next';

import { Banner } from '@/components/Banner';
import { MainBlock } from '@/components/MainBlock';
import { PageContainer } from '@/components/PageContainer';
import { getJobs } from '@/service';

export const metadata: Metadata = {
  title: 'CAREERS – botspot',
};

export default async function Careers() {
  const { data } = await getJobs();

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
        <Grid
          mb={{ xs: 5, md: 10 }}
          spacing={{ xs: 2, md: 3, lg: 5 }}
          container
        >
          <Jobs data={data} />
        </Grid>
      </Box>

      <ExtraFooter />
    </main>
  );
}
