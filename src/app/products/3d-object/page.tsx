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
  title: '3D OBJECT SCANNER – botspot',
};

export default function ThreeDObject() {
  return (
    <main className="">
      <MediaBlock assetUrl="/img/products/3d-object/banner.png" banner />
      <PageContainer banner>
        <SecondaryBlock
          subline="Our answer to scanning the unscannable – with unmatched precision, ease, and speed."
          headline="3D Object"
          primaryCta={
            <Button variant="primary" href="/download-area">
              Download Data Sheet
            </Button>
          }
          secondaryCta={<Button variant="secondary">Request a Demo</Button>}
        />
      </PageContainer>

      <MediaBlock
        assetUrl="/img/products/3d-object/1.png"
        objectFit="contain"
      />
      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="Designed for industrial applications and high 3D model output, our scanner is fully automated, allowing even untrained personnel to operate it."
          subline="Overview"
        />
      </PageContainer>

      <MediaBlock assetUrl="/img/products/3d-object/2.png" />
      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="A unique combination of a fully transparent glass turntable, cross-polarized lighting system, digital spray, and high-resolution cameras."
          subline="Specifications"
        />
      </PageContainer>

      <Tile headline="Ease of Use, Quality and Speed">
        <Typography variant="body1">
          <UnorderedList>
            <UnorderedListItem>
              20,000 to 60,000 digital 3D assets per year
            </UnorderedListItem>
            <UnorderedListItem>
              Fully automated 3D scanning and 3D modeling process
            </UnorderedListItem>
            <UnorderedListItem>
              Can be operated without training
            </UnorderedListItem>
          </UnorderedList>
        </Typography>
      </Tile>
      <Tile headline="Perfectly Coordinated Components">
        <Typography variant="body1">
          <UnorderedList>
            <UnorderedListItem>
              The fully transparent glass turningtable allows for automated,
              seamless scanning without the need for flipping or repositioning
              an object
            </UnorderedListItem>
            <UnorderedListItem>
              The camera arm with high-resolution cameras that can be adapted to
              your needs and requirements.
            </UnorderedListItem>
            <UnorderedListItem>
              A polarized lighting system (in combination with polarizing
              filters on camera lenses) reduces reflections
            </UnorderedListItem>
          </UnorderedList>
        </Typography>
      </Tile>
      <Tile headline="botspot Auomation Suite Integration">
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
            <Iframe src="https://sketchfab.com/models/9705b163787f4535aa936564b77496eb/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_annotations=0&dnt=1" />
          }
          secondChild={
            <Iframe src="https://sketchfab.com/models/c896b54b644443cc8e6c04aa3e5d6d45/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_annotations=0&dnt=1" />
          }
        />
      </Box>

      <GalleryTile imgUrl="/img/products/3d-object/3.png">
        <SecondaryBlock
          subline="Understanding the Basics of 3D Modeling"
          headline="Santa Unwrapped"
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
