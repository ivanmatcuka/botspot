import { NextButton } from '@/components/NextButton';
import {
  Banner,
  Box,
  Button,
  GalleryTile,
  MainBlock,
  PageContainer,
  SecondaryBlock,
  Skeleton,
  Tile,
  Typography,
} from '@botspot/ui';
import { Suspense } from 'react';

import ProductsList from '../../components/Products';

export default function Products() {
  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/videos/banners/products.mp4',
        }}
        headline="PRODUCTS"
        sublineElement="Generate photorealistic 3D models with our industry-leading scanners, designed for precision, high-resolution detail, and reliable performance across any project."
      >
        <Button href="/download-area" variant="primary">
          Download Data Sheet
        </Button>
        <Button href="/areas" variant="secondary">
          Areas of Use
        </Button>
      </Banner>

      <PageContainer mt={{ md: 15, xs: 10 }}>
        <MainBlock
          headline="3D Scanners made by botspot are easy to use and come with a fully automated software package."
          subline="Virtual Precision"
        />
      </PageContainer>

      <Box mb={{ md: 15, xs: 10 }}>
        <Tile headline="Full-Body Scanning">
          <Typography variant="body1">
            Capture complete, high-resolution 3D scans with our 3D Full-Body
            Scanner, designed to provide lifelike detail from head to toe.
            Perfect for applications in VR, AR, movies and gaming, our scanner
            delivers professional-grade results with ease.
          </Typography>
        </Tile>
        <Tile headline="Object Scanning">
          <Typography variant="body1">
            Achieve precise, detailed 3D scans of objects both large and small
            with our object scanners. Ideal for product design, quality control,
            and digital archiving, these scanners capture every surface and
            geometry with unmatched accuracy.
          </Typography>
        </Tile>
        <Tile headline="Software Package">
          <Typography variant="body1">
            Our scanners are automated with our Automation Suite software
            package, tailored to optimize workflow. Allowing full control of
            cameras, lighting and turntable, our software ensures seamless
            integration with your 3D scanning projects.
          </Typography>
        </Tile>
      </Box>

      <Suspense fallback={<Skeleton height="100%" variant="rectangular" />}>
        <ProductsList />
      </Suspense>

      <GalleryTile imgUrl="/img/products/4.png">
        <SecondaryBlock
          headline="Our Scanners in Action"
          sublineElement="Discover our areas of use with a diverse range of applications and industries."
        >
          <NextButton href="/areas" variant="primary">
            Explore Applications
          </NextButton>
        </SecondaryBlock>
      </GalleryTile>
    </main>
  );
}
