import { Button } from '@/components/NextButton/NextButton';
import { Banner, Iframe, MainBlock, PageContainer, Tile } from '@botspot/ui';
import { Box, Typography } from '@mui/material';
import { Suspense } from 'react';

import AreaPost from '../../../components/AreaPost';

const AREA_SLUG = 'areas-industrial';
const POST_SLUG = 'digitization-of-automotive-parts-with-complex-geometry';

export default function Industrial() {
  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/img/areas/industrial/banner.png',
        }}
        headline="Industrial Areas of Use"
        sublineElement="Benefit from accelerated workflows thanks to reverse engineering and the  most efficient quality control in the context of Industry 4.0."
      />

      <PageContainer mt={{ md: 15, xs: 10 }}>
        <MainBlock
          headline="We provide high-precision 3D models of objects, 360° images for documentation and extraction of measurement data for quality control."
          subline="Insight"
        />
      </PageContainer>

      <Tile headline="Automated Scanning Process">
        <Typography variant="body1">
          With our automated photogrammetric scanning solutions, you get the 3D
          data you need in a short time and a wide variety of export formats,
          depending on further use. The accurate non-contact 3D measurement
          creates a perfect template for digital construction processes.
        </Typography>
      </Tile>

      <PageContainer mt={{ md: 15, xs: 10 }}>
        <MainBlock
          headline="Streamline industrial processes with our 3D scanners for accurate measurements and improved precision."
          subline="Quality Control & Reverse Engineering"
        />
      </PageContainer>

      <Tile headline="7-Lights">
        <Box height={360}>
          <Iframe src="https://sketchfab.com/models/d839701297f54d978ffb39a4566c0cdf/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1" />
        </Box>

        <Typography my={2} variant="body1">
          “botspot works with a lot of effort to find the best solution for the
          customer – with success. We are very satisfied and recommend botspot
          with a clear conscience!”
        </Typography>
        <Button href={`/3d-academy/${POST_SLUG}`} variant="primary">
          Read Article
        </Button>
      </Tile>
      <Tile headline="Reverse Engineering">
        <Box height={360}>
          <Iframe src="https://sketchfab.com/models/21ff92563c824f01a2166f22448f2940/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1" />
        </Box>
        <Typography mt={2} variant="body1">
          Where older components are no longer manufactured and no CAD data of
          the object is available, 3D scanning is the method of choice to
          digitize the objects. Subsequently, a perfect copy of the original
          object can be produced with 3D printing.
        </Typography>
      </Tile>

      <Tile headline="Documentation of Defects on Car Bodies">
        <Box height={360}>
          <Iframe src="https://sketchfab.com/models/83cbb24b8aca4dd1882df4a3dc9c6e65/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1" />
        </Box>
        <Typography mt={2} variant="body1">
          A special focus of our current development work is on automotive
          applications, especially for the quality control and the inspection of
          smallest damages and corrosion defects with highest possible speed. In
          this regard, we develop solutions for the smallest components, but
          also for entire vehicles.
        </Typography>
      </Tile>

      <Suspense>
        <AreaPost slug={AREA_SLUG} />
      </Suspense>
    </main>
  );
}
