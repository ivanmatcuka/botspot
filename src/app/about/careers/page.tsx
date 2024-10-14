import { Jobs } from './Jobs';

import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { getJobs } from '@/services/blogService';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';

import { Box } from '@mui/material';

export default async function Careers() {
  const { data } = await getJobs();

  return (
    <main className="">
      <MediaBlock assetUrl="/img/banners/careers.png" />

      <PageContainer banner>
        <SecondaryBlock
          subline="We are always on the lookout for young talents as well as seasoned professionals."
          headline="Careers"
        />
      </PageContainer>

      <PageContainer>
        <MainBlock
          headline="We strive for innovative spirit and foster our open corporate culture. Feel free to check our openings below."
          subline="Open Positions"
        />
      </PageContainer>

      <Jobs data={data} />

      <Box bgcolor="grey.100" py={10} overflow="auto" mt={{ xs: 5, md: 10 }}>
        <PageContainer mt={0} mb={0}>
          <SecondaryBlock
            subline="Just send us an email at career@botspot.de to see if we can find the right fit."
            headline="Can’t find a suitable position for you?"
          />
        </PageContainer>
      </Box>
    </main>
  );
}
