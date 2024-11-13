import { Posts } from '../blog/Posts';

import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { QuestionForm } from '@/app/components/QuestionForm';
import { Tile } from '@/app/components/Tile/Tile';

import { Box, Grid, Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'LEARN ABOUT 3D SCANNING – botspot',
};

export default function Learn() {
  return (
    <main className="">
      <Banner
        headline="LEARN ABOUT 3D SCANNING"
        mediaBlockOptions={{
          assetUrl: '/img/banners/learn.png',
        }}
        primaryCta={
          <Button href="/blog" variant="primary">
            Check Our Blog
          </Button>
        }
        secondaryCta={
          <Button href="/contact-us" variant="secondary">
            Ask Us Α Question
          </Button>
        }
        sublineElement="Discover the fundamentals of 3D scanning and explore how this cutting-edge technology is transforming industries, from design to manufacturing."
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="3D photogrammetry scanning creates a 3D model by combining many photos taken from different angles of an object or scene."
          subline="What Is 3D Scanning?"
        />
      </PageContainer>

      <Tile headline="Capturing Images">
        <Typography variant="body1">
          The foundational step is acquiring multiple, overlapping photographs
          of the subject.
          <br />
          The number and quality of these images directly impact the final scan
          result.
        </Typography>
      </Tile>
      <Tile headline="Processing Images">
        <Typography variant="body1">
          Once captured, these images are fed into photogrammetry software, such
          as RealityCapture. This software identifies common reference points
          and unique features in the different images.
        </Typography>
      </Tile>
      <Tile headline="Creating 3D Models">
        <Typography variant="body1">
          For the final step, the software stitches the images together,
          applying textures and colors from the photographs to the 3D model.
        </Typography>
      </Tile>

      <PageContainer>
        <Image
          alt=""
          className="w-full"
          height={440}
          quality={100}
          src="/img/learn/1.png"
          width={1010}
        />
      </PageContainer>
      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          cta={
            <Button href="/blog" variant="secondary">
              Visit 3D Academy
            </Button>
          }
          headline="Our 3D Academy offers a clear overview of 3D scanning, with insights, tips, and detailed explanations for understanding the technology."
          subline="Questions & Articles"
        />
      </PageContainer>

      <Box className="w-full flex justify-center" maxWidth="xl" mx="auto">
        <Grid spacing={{ xs: 2, md: 3, lg: 5 }} xs={10} container>
          <Posts perPage={6} hidePagination />
        </Grid>
      </Box>

      <QuestionForm />
    </main>
  );
}
