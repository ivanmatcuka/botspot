import Image from 'next/image';

import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { Typography } from '@mui/material';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';

export default function CustomSolutions() {
  return (
    <main className="">
      <SecondaryBlock
        assetUrl="/img/areas/custom-solution/banner.png"
        subline="Create bespoke solutions with our 3D scanners, offering accurate, customized models to fit your unique specifications."
        headline="Custom Solutions"
      />

      <MainBlock
        headline="We see unconventional 3D scanning requests as an opportunity to collaborate even closer with our clients."
        subline="Insight"
      />

      <Tile headline="Custom Solutions">
        <Typography variant="body1">
          Achieve tailored results with our 3D scanning solutions, delivering
          precise and custom-fit models for your specific needs.
        </Typography>
      </Tile>

      <MainBlock
        headline="Streamline industrial processes with our 3D scanners for accurate measurements and improved precision."
        subline="Industrial Areas of Use"
      />

      <Tile headline="Scanning Animals for International Series">
        <Image
          src="/img/areas/custom-solution/1.png"
          alt="Scanning Animals for International Series"
          width={700}
          height={400}
          style={{ width: '100%' }}
        />
        <Typography variant="body1" my={2}>
          Approached by the new historical epic series “Those About to Die”,
          botspot took on the challenge of 3D scanning a horse.
        </Typography>
        <Button variant="primary">Read Article</Button>
      </Tile>
      <Tile headline="Large Objects">
        <Image
          src="/img/areas/custom-solution/2.png"
          alt="Large Objects"
          width={700}
          height={400}
          style={{ width: '100%' }}
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
          primaryCta={<Button variant="primary">Visit Innovation Lab</Button>}
        />
      </GalleryTile>
    </main>
  );
}
