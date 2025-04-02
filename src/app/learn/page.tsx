import { Posts } from '../3d-academy/Posts';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Suspense } from 'react';

import { Banner } from '@/components/Banner';
import { Button } from '@/components/Button';
import { LoadingSkeletons } from '@/components/LoadingSkeletons';
import { MainBlock } from '@/components/MainBlock';
import { PageContainer } from '@/components/PageContainer';
import { QuestionForm } from '@/components/QuestionForm';
import { Tile } from '@/components/Tile';

export default function Learn() {
  return (
    <main className="">
      <Banner
        headline="LEARN ABOUT 3D SCANNING"
        mediaBlockOptions={{
          assetUrl: '/img/banners/learn.webp',
        }}
        primaryCta={
          <Button href="/3d-academy" variant="primary">
            Visit 3D Academy
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
          className="w-full rounded-xl"
          height={440}
          loading="lazy"
          quality={80}
          src="/img/learn/1.png"
          width={1010}
        />
      </PageContainer>
      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          cta={
            <Button href="/3d-academy" variant="secondary">
              Visit 3D Academy
            </Button>
          }
          headline="Our 3D Academy offers a clear overview of 3D scanning, with insights, tips, and detailed explanations for understanding the technology."
          subline="Questions & Articles"
        />
      </PageContainer>

      <Box className="w-full flex justify-center" maxWidth="xl" mx="auto">
        <Suspense fallback={<LoadingSkeletons count={6} />}>
          <Posts perPage={6} hidePagination />
        </Suspense>
      </Box>

      <QuestionForm />
    </main>
  );
}
