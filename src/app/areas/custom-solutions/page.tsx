import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { Iframe } from '@/app/components/3dIframe/3dIframe';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Solutions – botspot',
};

export default function CustomSolutions() {
  return (
    <main className="">
      <MediaBlock assetUrl="/img/areas/custom-solution/banner.png" banner />
      <PageContainer banner>
        <SecondaryBlock
          subline="Create bespoke solutions with our 3D scanners, offering accurate, customized models to fit your unique specifications."
          headline="Custom Solutions"
        />
      </PageContainer>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="We see unconventional 3D scanning requests as an opportunity to collaborate even closer with our clients."
          subline="Insight"
        />
      </PageContainer>

      <Tile headline="Custom Solutions">
        <Typography variant="body1">
          Achieve tailored results with our 3D scanning solutions, delivering
          precise and custom-fit models for your specific needs.
        </Typography>
      </Tile>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="Streamline industrial processes with our 3D scanners for accurate measurements and improved precision."
          subline="Industrial Areas of Use"
        />
      </PageContainer>

      <Tile headline="Scanning Animals for International Series">
        <Box height={360}>
          <Iframe src="https://sketchfab.com/models/7d89f65475664a0eabc39e3e7790cddf/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_annotations=0&dnt=1" />
        </Box>
        <Typography variant="body1" my={2}>
          Approached by the new historical epic series “Those About to Die”,
          botspot took on the challenge of 3D scanning a horse.
        </Typography>
        <Button variant="primary" href="/blog">
          Read Article
        </Button>
      </Tile>
      <Tile headline="Large Objects">
        <Image
          src="/img/areas/custom-solution/2.png"
          alt="Large Objects"
          width={700}
          height={400}
          style={{ width: '100%' }}
          quality={100}
        />
        <Typography variant="body1" mt={2}>
          Have a large or unusual item that needs scanning? We’ve got you
          covered. Our expert team specializes in handling special requests,
          ensuring precision and quality for even the most challenging projects.
          Our team will come to you, with all the equipment needed to create
          high-quality models.
        </Typography>
      </Tile>

      <GalleryTile imgUrl="/img/areas/custom-solution/3.png">
        <SecondaryBlock
          subline="Our Innovation Lab handles Custom Solutions and bridges the gap between research and industrial production."
          headline="Innovation Lab"
          primaryCta={
            <Button variant="primary" href="/innovation-lab">
              Visit Innovation Lab
            </Button>
          }
        />
      </GalleryTile>
    </main>
  );
}
