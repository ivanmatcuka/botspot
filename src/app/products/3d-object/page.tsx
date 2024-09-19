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

export default function ThreeDObject() {
  return (
    <main className="">
      <SecondaryBlock
        assetUrl="/img/products/3d-object/banner.png"
        subline="Our answer to scanning the unscannable – with unmatched precision, ease, and speed."
        headline="3D Object"
        primaryCta={<Button variant="primary">Download Data Sheet</Button>}
        secondaryCta={<Button variant="secondary">Request a Demo</Button>}
      />

      <MainBlock
        assetUrl="/img/products/3d-object/1.png"
        headline="Designed for industrial applications and high 3D model output, our scanner is fully automated, allowing even untrained personnel to operate it."
        subline="Overview"
      />

      <MainBlock
        assetUrl="/img/products/3d-object/2.png"
        headline="A unique combination of a fully transparent glass turntable, cross-polarized lighting system, digital spray, and high-resolution cameras."
        subline="Specifications"
      />

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
      <Tile headline="Botspot Auomation Suite Integration">
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

      <Gallery />

      <GalleryTile imgUrl="/img/products/3d-object/3.png">
        <SecondaryBlock
          subline="Understanding the Basics of 3D Modeling"
          headline="Santa Unwrapped"
          primaryCta={<Button variant="primary">Read Full Story</Button>}
        />
      </GalleryTile>

      <FeedbackForm />
    </main>
  );
}
