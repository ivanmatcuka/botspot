import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { UnorderedList } from '@/app/components/UnorderedList/UnorderedList';
import { UnorderedListItem } from '@/app/components/UnorderedListItem/UnorderedListItem';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { Gallery } from '@/app/components/Gallery/Gallery';
import { Iframe } from '@/app/components/3dIframe/3dIframe';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D STUDIO SCANNER – botspot',
};

export default function ThreeDStudio() {
  return (
    <main className="">
      <MediaBlock assetUrl="/img/products/3d-studio/banner.png" banner />
      <PageContainer banner>
        <SecondaryBlock
          subline="Our flexible solution for 3D Scanning, adapting to even most precise requirements."
          headline="3D Studio"
          primaryCta={
            <Button variant="primary" href="/download-area">
              Download Data Sheet
            </Button>
          }
          secondaryCta={<Button variant="secondary">Request a Demo</Button>}
        />
      </PageContainer>

      <MediaBlock
        assetUrl="/img/products/3d-studio/1.png"
        objectFit="contain"
      />
      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="Engineered with adaptability in mind, every component of the setup is effortlessly adjustable."
          subline="Overview"
        />
      </PageContainer>

      <MediaBlock
        assetUrl="/img/products/3d-studio/2.png"
        objectFit="cover"
        fullHeight
      />
      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="The stunning results of the 3D reconstruction reduce the need for manual post-processing to an absolute minimum. "
          subline="Specifications"
        />
      </PageContainer>

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
      <Tile headline="botspot Automation Suite Integration">
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
        <Gallery
          firstChild={
            <Iframe src="https://sketchfab.com/models/0678bf45071d42be92027cf17fbb7b75/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_help=0&ui_settings=0&ui_annotations=0&dnt=1" />
          }
          secondChild={
            <Iframe src="https://sketchfab.com/models/098f5240cd464aea841f47d137ed53dc/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_help=0&ui_settings=0&ui_annotations=0&dnt=1" />
          }
        />
      </Box>

      <GalleryTile imgUrl="/img/products/3d-studio/3.png">
        <SecondaryBlock
          subline="A white, shiny ceramic bowl is one of the most challenging objects to scan, often called “unscannable”."
          headline="3D Scanning a White Ceramic Bowl"
          primaryCta={
            <Button variant="primary" href="/blog">
              Read Full Story
            </Button>
          }
        />
      </GalleryTile>

      <FeedbackForm />
    </main>
  );
}
