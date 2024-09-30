import Image from 'next/image';
import { Typography } from '@mui/material';

import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';

export default function Industrial() {
  return (
    <main className="">
      <SecondaryBlock
        assetUrl="/img/areas/industrial/banner.png"
        subline="Benefit from accelerated workflows thanks to reverse engineering and the  most efficient quality control in the context of Industry 4.0."
        headline="Industrial Areas of Use"
        banner
      />

      <MainBlock
        headline="We provide high-precision 3D models of objects, 360° images for documentation and extraction of measurement data for quality control."
        subline="Insight"
      />

      <Tile headline="Automated Scanning Process">
        <Typography variant="body1">
          With our automated photogrammetric scanning solutions, you get the 3D
          data you need in a short time and a wide variety of export formats,
          depending on further use. The accurate non-contact 3D measurement
          creates a perfect template for digital construction processes.
        </Typography>
      </Tile>

      <MainBlock
        headline="Streamline industrial processes with our 3D scanners for accurate measurements and improved precision."
        subline="Industrial Areas of Use"
      />

      <Tile headline="7-Lights">
        <Image
          src="/img/areas/industrial/1.png"
          alt="7-Lights"
          width={700}
          height={400}
          style={{ width: '100%' }}
        />
        <Typography variant="body1" my={2}>
          “botspot works with a lot of effort to find the best solution for the
          customer – with success. We are very satisfied and recommend botspot
          with a clear conscience!”
        </Typography>
        <Button variant="primary">Read Article</Button>
      </Tile>
      <Tile headline="Reverse Engineering">
        <Image
          src="/img/areas/industrial/2.png"
          alt="Reverse Engineering"
          width={700}
          height={400}
          style={{ width: '100%' }}
        />
        <Typography variant="body1" mt={2}>
          Where older components are no longer manufactured and no CAD data of
          the object is available, 3D scanning is the method of choice to
          digitize the objects. Subsequently, a perfect copy of the original
          object can be produced with 3D printing.
        </Typography>
      </Tile>

      <Tile headline="Documentation of Defects on Car Bodies">
        <Image
          src="/img/areas/industrial/3.png"
          alt="Documentation of Defects on Car Bodies"
          width={700}
          height={400}
          style={{ width: '100%' }}
        />
        <Typography variant="body1" mt={2}>
          A special focus of our current development work is on automotive
          applications, especially for the quality control and the inspection of
          smallest damages and corrosion defects with highest possible speed. In
          this regard, we develop solutions for the smallest components, but
          also for entire vehicles.
        </Typography>
      </Tile>

      <GalleryTile imgUrl="/img/areas/industrial/4.png">
        <SecondaryBlock
          subline="Durable and fast, our 3D Studio is ideal for industrial applications."
          headline="We recommend our 3D Studio Scanner"
          primaryCta={
            <Button variant="primary">Explore 3D Object Scanner</Button>
          }
          hasParent
        />
      </GalleryTile>
    </main>
  );
}
