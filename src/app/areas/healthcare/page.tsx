import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';

import { Typography } from '@mui/material';
import Image from 'next/image';

export default function Healthcare() {
  return (
    <main className="">
      <MediaBlock assetUrl="/img/areas/healthcare/banner.png" />
      <PageContainer banner>
        <SecondaryBlock
          subline="Content has yet to be added. Content has yet to be added. Content has yet to be added."
          headline="Health Care"
        />
      </PageContainer>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock headline="Content has yet to be added." subline="Insight" />
      </PageContainer>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="New therapeutic approaches, improved diagnostics and state-of-the-art  prosthetics provided with botspot 3D scanning solutions."
          subline="Health Care"
        />
      </PageContainer>

      <Tile headline="MedReality">
        <Image
          src="/img/areas/healthcare/1.png"
          alt="MedReality"
          width={700}
          height={400}
          style={{ width: '100%' }}
          quality={100}
        />
        <Typography variant="body1" my={2}>
          Our partners from MedReality use our Scanning Solutions optimized for
          pathology, to provide clinicians and surgeons with medical data.
        </Typography>
        <Button variant="primary">Read Article</Button>
      </Tile>
    </main>
  );
}
