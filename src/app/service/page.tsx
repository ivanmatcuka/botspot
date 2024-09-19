import { MainBlock } from '../components/MainBlock/MainBlock';
import { Button } from '../components/Button/Button';
import { Typography } from '@mui/material';
import { Tile } from '../components/Tile/Tile';
import { FeedbackForm } from '../components/FeedbackForm/FeedbackForm';
import { Banner } from '../components/Banner/Banner';
import { SecondaryBlock } from '../components/SecondaryBlock/SecondaryBlock';
import { Gallery } from '../components/Gallery/Gallery';
import { GalleryTile } from '../components/GalleryTile/GalleryTile';

export default function Service() {
  return (
    <main className="">
      <Banner
        assetUrl="/img/banners/services.png"
        headline="3D SCAN SERVICE"
        subline="Our 3D scan services cater to individuals and businesses seeking  high-quality scans without the upfront costs and technical requirements  of owning a scanner."
        primaryCta={<Button variant="primary">Try Before You Buy</Button>}
        secondaryCta={
          <Button variant="secondary">In-House Scan Service</Button>
        }
      />

      <MainBlock
        subline="Try Before You Buy"
        headline="Experience the quality of our scanning technology before committing to a purchase."
        cta={<Button variant="primary">Request Try Before You Buy</Button>}
      />

      <Tile headline="Send Us Objects">
        <Typography variant="body1">
          Send us your items, we&apos;ll scan them and send you the
          marketing-ready 3D models.
        </Typography>
      </Tile>
      <Tile headline="Use For Project">
        <Typography variant="body1">
          Invest further by renting one or more scanners to run at your
          location, which can be operated by anyone.
        </Typography>
      </Tile>
      <Tile headline="Buy At Discount">
        <Typography variant="body1">
          If you decide to purchase the scanner, buy our 3D scanners for a
          discount on the money you already invested.
        </Typography>
      </Tile>

      <Gallery />

      <MainBlock
        subline="In-House Scan Service"
        headline="We convert physical objects into precise digital models, ideal for design, quality control, and VR."
        cta={<Button variant="primary">Request In-House Scan Service</Button>}
      />

      <Tile headline="Deliver Physical Content">
        <Typography variant="body1">
          Simply bring your subject or object to our office or send it, and let
          us handle the rest.
        </Typography>
      </Tile>
      <Tile headline="Let Us Develop">
        <Typography variant="body1">
          Recieve the raw 3D model on the spot or, if post-processing is
          required, within a few days.
        </Typography>
      </Tile>
      <Tile headline="3D Print Object">
        <Typography variant="body1">
          If you’d like to 3D print your new model, we have a network of
          specialized 3D printing partners to make the process as smooth as
          possible.
        </Typography>
      </Tile>

      <GalleryTile imgUrl="/img/service/1.png">
        <SecondaryBlock
          subline="Corporate event, fair show or convention coming up? Guarantee an unforgettable experience with full-body scanning. We deliver and set up the scanner, ensuring a seamless and impressive experience."
          headline="Event Hire"
          primaryCta={<Button variant="primary">Request Event Hire</Button>}
        />
      </GalleryTile>

      <GalleryTile imgUrl="/img/service/2.png">
        <SecondaryBlock
          subline="Have a large or unusual item that needs scanning? Our Innovation Lab specializes in handling special requests, even for the most challenging projects."
          headline="Special Requests"
          primaryCta={<Button variant="primary">Explore Innovation Lab</Button>}
        />
      </GalleryTile>

      <FeedbackForm />
    </main>
  );
}
