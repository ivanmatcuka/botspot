import { Iframe } from '@/app/components/3dIframe/3dIframe';
import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Custom Solutions – botspot',
};

export default function CustomSolutions() {
  return (
    <main className="">
      <Banner
        headline="Custom Solutions"
        mediaBlockOptions={{
          assetUrl: '/img/areas/custom-solution/banner.png',
        }}
        sublineElement="Create bespoke solutions with our 3D scanners, offering accurate, customized models to fit your unique specifications."
      />

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
        <Typography my={2} variant="body1">
          Approached by the new historical epic series “Those About to Die”,
          botspot took on the challenge of 3D scanning a horse.
        </Typography>
        <Button href="/blog" variant="primary">
          Read Article
        </Button>
      </Tile>
      <Tile headline="Large Objects">
        <Image
          alt="Large Objects"
          height={400}
          quality={100}
          src="/img/areas/custom-solution/2.png"
          style={{ width: '100%' }}
          width={700}
        />
        <Typography mt={2} variant="body1">
          Have a large or unusual item that needs scanning? We’ve got you
          covered. Our expert team specializes in handling special requests,
          ensuring precision and quality for even the most challenging projects.
          Our team will come to you, with all the equipment needed to create
          high-quality models.
        </Typography>
      </Tile>

      <GalleryTile imgUrl="/img/areas/custom-solution/3.png">
        <SecondaryBlock
          headline="Innovation Lab"
          primaryCta={
            <Button href="/about/innovation-lab" variant="primary">
              Visit Innovation Lab
            </Button>
          }
          sublineElement="Our Innovation Lab handles Custom Solutions and bridges the gap between research and industrial production."
        />
      </GalleryTile>
    </main>
  );
}
