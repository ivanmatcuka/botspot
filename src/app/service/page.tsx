import { Iframe } from '../components/3dIframe/3dIframe';
import { PageContainer } from '../components/PageContainer/PageContainer';

import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { Tile } from '@/app/components/Tile/Tile';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { Banner } from '@/app/components/Banner/Banner';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Gallery } from '@/app/components/Gallery/Gallery';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D SCAN SERVICE – botspot',
};

export default function Service() {
  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/img/banners/services.png',
        }}
        headline="3D SCAN SERVICE"
        subline="Our 3D scan services cater to individuals and businesses seeking  high-quality scans without the upfront costs and technical requirements  of owning a scanner."
        primaryCta={<Button variant="primary">Try Before You Buy</Button>}
        secondaryCta={
          <Button variant="secondary">In-House Scan Service</Button>
        }
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          subline="Try Before You Buy"
          headline="Experience the quality of our scanning technology before committing to a purchase."
          cta={<Button variant="primary">Request Try Before You Buy</Button>}
        />
      </PageContainer>

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

      <Box mb={{ xs: 5, md: 10 }}>
        <Gallery
          firstChild={
            <Iframe src="https://sketchfab.com/models/87f87f23481f4ed7bd73b2155c1332b4/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_annotations=0&dnt=1" />
          }
          secondChild={
            <Iframe src="https://sketchfab.com/models/74a79ea84e674a878c5ade45838e457a/embed?autostart=1&camera=0&ui_animations=0&ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_annotations=0&dnt=1" />
          }
        />
      </Box>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          subline="In-House Scan Service"
          headline="We convert physical objects into precise digital models, ideal for design, quality control, and VR."
          cta={<Button variant="primary">Request In-House Scan Service</Button>}
        />
      </PageContainer>

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

      <GalleryTile bgColor="white" imgUrl="/img/service/1.png">
        <SecondaryBlock
          sublineHtml="Corporate event, fair show or convention coming up? Guarantee an unforgettable experience with full-body scanning. We deliver and set up the scanner, ensuring a seamless and impressive experience."
          headline="Event Hire"
          primaryCta={<Button variant="primary">Request Event Hire</Button>}
        />
      </GalleryTile>

      <GalleryTile imgUrl="/img/service/2.png">
        <SecondaryBlock
          sublineHtml="Have a large or unusual item that needs scanning? Our Innovation Lab specializes in handling special requests, even for the most challenging projects."
          headline="Special Requests"
          primaryCta={
            <Button variant="primary" href="/about/innovation-lab">
              Explore Innovation Lab
            </Button>
          }
        />
      </GalleryTile>

      <FeedbackForm />
    </main>
  );
}
