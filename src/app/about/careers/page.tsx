import { Jobs } from './Jobs';
import { ExtraFooter } from './ExtraFooter';

import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { getJobs } from '@/services/mainService';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CAREERS – botspot',
};

export default async function Careers() {
  const { data } = await getJobs();

  return (
    <main className="">
      <MediaBlock assetUrl="/img/banners/careers.png" banner />

      <PageContainer banner>
        <SecondaryBlock
          headline="Careers"
          sublineElement="We are always on the lookout for young talents as well as seasoned professionals."
        />
      </PageContainer>

      <PageContainer>
        <MainBlock
          headline="We strive for innovative spirit and foster our open corporate culture. Feel free to check our openings below."
          subline="Open Positions"
        />
      </PageContainer>

      <Jobs data={data} />

      <ExtraFooter />
    </main>
  );
}
