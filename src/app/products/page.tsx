import { Typography } from '@mui/material';

import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { Banner } from '@/app/components/Banner/Banner';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import Link from 'next/link';

export default function Products() {
  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/img/banners/products.png',
        }}
        headline="PRODUCTS"
        subline="Generate photorealistic 3D models with unmatched quality and breathtaking textures in almost no time. "
        primaryCta={<Button variant="primary">Download Data Sheets</Button>}
        secondaryCta={<Button variant="secondary">See Areas of Use</Button>}
      />

      <MainBlock
        subline="Effortless Workflow"
        headline="3D Scanners made by botspot are easy to use and come with a fully automated software package."
      />

      <Tile headline="3D Full Body Scans">
        <Typography variant="body1">
          With 3D full-body scans, the best results are achieved when all images
          are generated simultaneously, since even involuntary micro movements
          such as blinking, breathing, or maintaining balance can distort the
          scanning result. Our 3D full-body scanners are therefore equipped with
          a variety of cameras that capture a person from all possible
          perspectives.
        </Typography>
      </Tile>
      <Tile headline="3D Object Scans">
        <Typography variant="body1">
          3D object scanners require significantly fewer cameras than 3D
          full-body scanners as the scan object does not move. The object is
          placed on a turntable and images can be taken successively. We offer
          both classic 3D scanners with monochrome turntables and
          high-performance scanners with fully transparent turntables.
        </Typography>
      </Tile>
      <Tile headline="Fully Automated Software Package">
        <Typography variant="body1">
          botspot scanners come with a fully automated software package in order
          to scale up 3D asset production and bring down the cost per model.
        </Typography>
      </Tile>

      <SecondaryBlock
        mediaBlockOptions={{
          assetUrl: '/img/products/1.png',
          objectFit: 'contain',
        }}
        headline="botscan NEO"
        subline="Smart 3D fullbody scanner for high volume 3D model production"
        primaryCta={
          <Link href="/products/botscan-neo">
            <Button variant="primary">Explore Neo</Button>
          </Link>
        }
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
      />

      <SecondaryBlock
        mediaBlockOptions={{
          assetUrl: '/img/products/2.png',
          objectFit: 'contain',
        }}
        headline="3D Studio"
        subline="Highly flexible and adaptable 3D object scanner for precise photogrammetry"
        primaryCta={<Button variant="primary">Explore 3D Studio</Button>}
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
      />

      <SecondaryBlock
        mediaBlockOptions={{
          assetUrl: '/img/products/3.png',
          objectFit: 'contain',
        }}
        headline="3D Object"
        subline="Fully automated 3D object scanner for precise photogrammetry"
        primaryCta={<Button variant="primary">Explore 3D Object</Button>}
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
      />

      <GalleryTile imgUrl="/img/products/4.png">
        <SecondaryBlock
          subline="Discover our Areas of Use with a diverse range of applications and industries."
          headline="Our Scanners in Action"
          primaryCta={<Button variant="primary">Explore Applications</Button>}
          hasParent
        />
      </GalleryTile>

      <FeedbackForm />
    </main>
  );
}
