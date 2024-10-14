import { Button } from '@/app/components/Button/Button';
import { Iframe } from '@/app/components/3dIframe/3dIframe';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { Gallery } from '@/app/components/Gallery/Gallery';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { UnorderedList } from '@/app/components/UnorderedList/UnorderedList';
import { UnorderedListItem } from '@/app/components/UnorderedListItem/UnorderedListItem';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';

import { Box } from '@mui/material';

export default function BorscanNeo() {
  return (
    <main className="">
      <MediaBlock assetUrl="/img/products/botscan-neo/banner.png" />

      <PageContainer banner>
        <SecondaryBlock
          subline="Our Smart 3D Full Body Scanner for High Volume 3D Model Production"
          headline="botscan NEO"
          primaryCta={<Button variant="primary">Download Data Sheet</Button>}
          secondaryCta={<Button variant="secondary">Request a Demo</Button>}
        />
      </PageContainer>

      <MediaBlock
        assetUrl="/img/products/botscan-neo/1.png"
        objectFit="contain"
      />
      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="Highly precise and colorfast 3D data of people in a fraction of a second, creating true digital twins with a measurement accuracy up to 1 mm."
          subline="Overview"
        />
      </PageContainer>

      <MediaBlock
        assetUrl="/img/products/botscan-neo/2.png"
        fullHeight
        objectFit="cover"
      />
      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="Perfect for Full Body Scanning with automized workflow patterns."
          subline="Specifications"
        />
      </PageContainer>

      <Tile headline="The Numbers">
        <UnorderedList>
          <UnorderedListItem>
            Photorealistic texture down to 0.06mm pixel resolution
          </UnorderedListItem>
          <UnorderedListItem>Scan complete in 0.01 seconds</UnorderedListItem>
          <UnorderedListItem>True Colors</UnorderedListItem>
        </UnorderedList>
      </Tile>
      <Tile headline="Optimized for High Volume 3D Production">
        <UnorderedList>
          <UnorderedListItem>Walk in, scan, walk out</UnorderedListItem>
          <UnorderedListItem>
            Model computation decoupled from scan workflow
          </UnorderedListItem>
          <UnorderedListItem>
            Automated generation of the 3D model without user input
          </UnorderedListItem>
        </UnorderedList>
      </Tile>
      <Tile headline="Safety First">
        <UnorderedList>
          <UnorderedListItem>
            Hazard Free Non-Contact Scanning
          </UnorderedListItem>
          <UnorderedListItem>No lasers</UnorderedListItem>
          <UnorderedListItem>No protective gear necessary</UnorderedListItem>
        </UnorderedList>
      </Tile>

      <Box mb={{ xs: 5, md: 10 }}>
        <Gallery
          firstChild={
            <Iframe src="https://sketchfab.com/models/67b0215186db4909b6a506aa717931a4/embed?autospin=1&autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1" />
          }
          secondChild={
            <Iframe src="https://sketchfab.com/models/c00fcb03eac448e2bacc68570186c009/embed?autospin=1&autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1" />
          }
        />
      </Box>

      <GalleryTile imgUrl="/img/products/botscan-neo/5.png">
        <SecondaryBlock
          subline="Berlin based artist Martin Werthmann designed the set for the German opera “The Dead City”."
          headline="Designing Scenic Spaces"
          primaryCta={<Button variant="primary">Read Full Story</Button>}
        />
      </GalleryTile>

      <FeedbackForm />
    </main>
  );
}
