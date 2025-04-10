import { NextButton } from '@/components/NextButton';
import { Banner, Iframe, MainBlock, PageContainer, Tile } from '@botspot/ui';
import { Box, Typography } from '@mui/material';
import { Suspense } from 'react';

import AreaPost from '../../../components/AreaPost';

const AREA_SLUG = 'areas-custom';

export default function CustomSolutions() {
  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/img/areas/custom-solution/banner.png',
        }}
        headline="Custom Solutions"
        sublineElement="Create bespoke solutions with our 3D scanners, offering accurate, customized models to fit your unique specifications."
      />

      <PageContainer mt={{ md: 15, xs: 10 }}>
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

      <PageContainer mt={{ md: 15, xs: 10 }}>
        <MainBlock
          headline="Achieve tailored results with our 3D scanning solutions, delivering precise and custom-fit models for your specific needs."
          subline="Custom Solutions"
        />
      </PageContainer>

      <Tile headline="Scanning Animals for International Series">
        <Box height={360}>
          <Iframe src="https://sketchfab.com/models/7d89f65475664a0eabc39e3e7790cddf/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1" />
        </Box>
        <Typography my={2} variant="body1">
          Approached by the new historical epic series “Those About to Die”,
          botspot took on the challenge of 3D scanning a horse.
        </Typography>
        <NextButton href="/3d-academy" variant="primary">
          Read Article
        </NextButton>
      </Tile>
      <Tile headline="Large Objects">
        <Box height={360}>
          <Iframe src="https://sketchfab.com/models/26a4f03049d34c8f9e055c29a0ea7365/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1" />
        </Box>
        <Typography mt={2} variant="body1">
          Have a large or unusual item that needs scanning? We’ve got you
          covered. Our expert team specializes in handling special requests,
          ensuring precision and quality for even the most challenging projects.
          Our team will come to you, with all the equipment needed to create
          high-quality models.
        </Typography>
      </Tile>

      <Suspense>
        <AreaPost slug={AREA_SLUG} />
      </Suspense>
    </main>
  );
}
