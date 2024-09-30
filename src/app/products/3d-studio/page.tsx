import { Box, Typography } from '@mui/material';

import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { UnorderedList } from '@/app/components/UnorderedList/UnorderedList';
import { UnorderedListItem } from '@/app/components/UnorderedListItem/UnorderedListItem';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { Gallery } from '@/app/components/Gallery/Gallery';

export default function ThreeDStudio() {
  return (
    <main className="">
      <SecondaryBlock
        mediaBlockOptions={{
          assetUrl: '/img/products/3d-studio/banner.png',
        }}
        subline="Our flexible solution for 3D Scanning, adapting to even most precise requirements."
        headline="3D Studio"
        primaryCta={<Button variant="primary">Download Data Sheet</Button>}
        secondaryCta={<Button variant="secondary">Request a Demo</Button>}
        banner
      />

      <MainBlock
        mediaBlockOptions={{
          assetUrl: '/img/products/3d-studio/1.png',
        }}
        headline="Engineered with adaptability in mind, every component of the setup is effortlessly adjustable."
        subline="Overview"
      />

      <MainBlock
        mediaBlockOptions={{
          assetUrl: '/img/products/3d-studio/2.png',
        }}
        headline="The stunning results of the 3D reconstruction reduce the need for manual post-processing to an absolute minimum. "
        subline="Specifications"
      />

      <Tile headline="Adaptable Design">
        <Typography variant="body1">
          <UnorderedList>
            <UnorderedListItem>
              Cameras, lights and settings can be adjusted according to object
              size and requirements.
            </UnorderedListItem>
            <UnorderedListItem>
              Transparent turning table allows for automated, seamless scanning.
            </UnorderedListItem>
            <UnorderedListItem>
              Camera arm with high-resolution cameras
            </UnorderedListItem>
          </UnorderedList>
        </Typography>
      </Tile>
      <Tile headline="Perfect Geometry with our Digital Spray">
        <Typography variant="body1">
          <UnorderedList>
            <UnorderedListItem>
              Integrated digital spray (pattern projection) to scan
              structureless, homogeneous surfaces.
            </UnorderedListItem>
            <UnorderedListItem>
              Damage-free scanning of reflective or transparent objects.
            </UnorderedListItem>
            <UnorderedListItem>
              High-quality geometric data of object obtained
            </UnorderedListItem>
          </UnorderedList>
        </Typography>
      </Tile>
      <Tile headline="Botspot Automation Suite Integration">
        <Typography variant="body1">
          <UnorderedList>
            <UnorderedListItem>
              Full control of cameras, turntables and lighting
            </UnorderedListItem>
            <UnorderedListItem>Data management capabilities</UnorderedListItem>
            <UnorderedListItem>
              Automated generation of the 3D model without user input
            </UnorderedListItem>
          </UnorderedList>
        </Typography>
      </Tile>

      <Box mb={{ xs: 5, md: 10 }}>
        <Gallery />
      </Box>

      <GalleryTile imgUrl="/img/products/3d-studio/3.png">
        <SecondaryBlock
          subline="A white, shiny ceramic bowl is one of the most challenging objects to scan, often called “unscannable”."
          headline="3D Scanning a White Ceramic Bowl"
          primaryCta={<Button variant="primary">Read Full Story</Button>}
          hasParent
        />
      </GalleryTile>

      <FeedbackForm />
    </main>
  );
}
