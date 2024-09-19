import { MainBlock } from '../../components/MainBlock/MainBlock';
import { Button } from '../../components/Button/Button';
import { Typography } from '@mui/material';
import { SecondaryBlock } from '../../components/SecondaryBlock/SecondaryBlock';
import { Tile } from '../../components/Tile/Tile';
import { FeedbackForm } from '../../components/FeedbackForm/FeedbackForm';
import { UnorderedList } from '@/app/components/UnorderedList/UnorderedList';
import { UnorderedListItem } from '@/app/components/UnorderedListItem/UnorderedListItem';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { Gallery } from '@/app/components/Gallery/Gallery';

export default function BorscanNeo() {
  return (
    <main className="">
      <SecondaryBlock
        assetUrl="/img/products/botscan-neo/banner.png"
        subline="Botscan NEO"
        headline="Our Smart 3D Full Body Scanner for High Volume 3D Model Production"
        primaryCta={<Button variant="primary">Download Data Sheet</Button>}
        secondaryCta={<Button variant="secondary">Request a Demo</Button>}
      />

      <MainBlock
        assetUrl="/img/products/botscan-neo/1.png"
        headline="Highly precise and colorfast 3D data of people in a fraction of a second, creating true digital twins with a measurement accuracy up to 1 mm."
        subline="Overview"
      />

      <MainBlock
        assetUrl="/img/products/botscan-neo/2.png"
        headline="Perfect for Full Body Scanning with automized workflow patterns."
        subline="Specifications"
      />

      <Tile headline="The Numbers">
        <Typography variant="body1">
          <UnorderedList>
            <UnorderedListItem>
              Photorealistic texture down to 0.06mm pixel resolution
            </UnorderedListItem>
            <UnorderedListItem>Scan complete in 0.01 seconds</UnorderedListItem>
            <UnorderedListItem>True Colors</UnorderedListItem>
          </UnorderedList>
        </Typography>
      </Tile>
      <Tile headline="Optimized for High Volume 3D Production">
        <Typography variant="body1">
          <UnorderedList>
            <UnorderedListItem>Walk in, scan, walk out</UnorderedListItem>
            <UnorderedListItem>
              Model computation decoupled from scan workflow
            </UnorderedListItem>
            <UnorderedListItem>
              Automated generation of the 3D model without user input
            </UnorderedListItem>
          </UnorderedList>
        </Typography>
      </Tile>
      <Tile headline="Safety First">
        <Typography variant="body1">
          <UnorderedList>
            <UnorderedListItem>
              Hazard Free Non-Contact Scanning
            </UnorderedListItem>
            <UnorderedListItem>No lasers</UnorderedListItem>
            <UnorderedListItem>No protective gear necessary</UnorderedListItem>
          </UnorderedList>
        </Typography>
      </Tile>

      <Gallery />

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
