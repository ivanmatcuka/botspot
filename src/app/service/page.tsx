import { SkeletonVideo } from '../components/SkeletonVideo';

import { Iframe } from '@/app/components/3dIframe/3dIframe';
import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm';
import { Gallery } from '@/app/components/Gallery/Gallery';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { generatePageMetadata } from '@/app/utils';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('service');
}

export default function Service() {
  return (
    <main className="">
      <Banner
        headline="3D SCAN SERVICE"
        mediaBlockOptions={{
          assetUrl: '/img/banners/services.png',
        }}
        primaryCta={
          <Button href="/contact-us" variant="primary">
            Collaboration Services
          </Button>
        }
        secondaryCta={
          <Button href="/contact-us" variant="secondary">
            In-House Scan Service
          </Button>
        }
        sublineElement="Our 3D scan services cater to individuals and businesses seeking  high-quality scans without the upfront costs and technical requirements  of owning a scanner."
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          cta={
            <Button href="/contact-us" variant="primary">
              Request In-House Scan Service
            </Button>
          }
          headline="Visit us or send us your items and receive high-quality 3D models."
          subline="In-House Scan Service"
        />
      </PageContainer>

      <Tile headline="Full-Body Scanning">
        <Typography variant="body1">
          Come and experience being scanned in our in-house botscan NEO. Let our
          experts guide you through each step to ensure top-quality digital
          assets tailored to your needs.
        </Typography>
      </Tile>
      <Tile headline="Object Scanning">
        <Typography variant="body1">
          Send us or bring your objects to our office. Our team carefully
          handles each object, ensuring high-quality digital models that meet
          the exact needs of your project.
        </Typography>
      </Tile>
      <Tile headline="Receive Your Models">
        <Typography variant="body1">
          Watch the 3D model being created in real time to quality check them
          yourself. Receive the raw models on the spot or, if post-processing is
          required, in a few days.
        </Typography>
      </Tile>

      <Box mb={{ xs: 5, md: 10 }}>
        <Gallery
          firstChild={
            <Iframe src="https://sketchfab.com/models/74a79ea84e674a878c5ade45838e457a/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1" />
          }
          secondChild={
            <Iframe src="https://sketchfab.com/models/87f87f23481f4ed7bd73b2155c1332b4/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1" />
          }
        />
      </Box>

      <PageContainer my={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="We understand every project is unique. That’s why we offer flexible post-processing options, from foundational scans to premium visualizations."
          subline="Post-Processing Tailored to Your Needs"
        />
      </PageContainer>

      <Tile headline="Raw 3D Scans">
        <Typography variant="body1">
          Receive unprocessed scans directly from our scanners - capturing
          precise geometry and texture. These serve as the perfect starting
          point for customization, post-processing or integration into your
          projects.
        </Typography>
      </Tile>
      <PageContainer my={{ xs: 10, md: 15 }}>
        <SkeletonVideo videoSrc="/videos/SH01_FINAL.mp4#t=0.1" />
      </PageContainer>

      <Tile headline="Optimization for Digital Use">
        <Typography variant="body1">
          For projects requiring more polish, we offer services to create
          refined 3D models. These ready-to-use assets are perfect for
          e-commerce, virtual showrooms or engaging 3D experiences.
        </Typography>
      </Tile>
      <PageContainer my={{ xs: 10, md: 15 }}>
        <SkeletonVideo videoSrc="/videos/SH02_FINAL.mp4#t=0.1" />
      </PageContainer>

      <Tile headline="Premium Product Visualizations">
        <Typography variant="body1">
          Elevate your 3D scans into fully rendered assets, seamlessly
          integrated into videos and images for high-end product visualization.
          The rendered models deliver a captivating level of realism and detail
          for marketing and advertising.
        </Typography>
      </Tile>
      <PageContainer my={{ xs: 10, md: 15 }}>
        <SkeletonVideo videoSrc="/videos/SH03_FINAL.mp4#t=0.1" />
      </PageContainer>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          cta={
            <Button href="/contact-us" variant="primary">
              Tell Us About Your Project
            </Button>
          }
          headline="Flexible services designed to enhance your projects and drive successful outcomes."
          subline="Dynamic Collaboration Services"
        />
      </PageContainer>

      <Tile headline="Consultation Services">
        <Typography variant="body1">
          Receive expert guidance to optimize your 3D scanning projects, from
          initial planning to implementation.
        </Typography>
      </Tile>
      <Tile headline="Short-Term Rental">
        <Typography variant="body1">
          Ideal for events or specific time periods, our short-term rentals
          provide the necessary equipment and a technical support team to take
          care of the scanning for you.
        </Typography>
      </Tile>
      <Tile headline="Long-Term Rental">
        <Typography variant="body1">
          Engage in ongoing collaboration with our long-term rental services,
          offering continuous access to equipment and remote support, ensuring
          sustained project success.
        </Typography>
      </Tile>

      <GalleryTile bgColor="white" imgUrl="/img/service/1.png">
        <SecondaryBlock
          headline="Event Hire"
          primaryCta={
            <Button href="/contact-us" variant="primary">
              Request Event Hire
            </Button>
          }
          sublineElement="Corporate event, fair show or convention coming up? Guarantee an unforgettable experience with full-body scanning. We deliver and set up the scanner, ensuring a seamless and impressive experience."
        />
      </GalleryTile>

      <GalleryTile imgUrl="/img/service/2.png">
        <SecondaryBlock
          headline="Special Requests"
          primaryCta={
            <Button href="/about/innovation-lab" variant="primary">
              Explore Innovation Lab
            </Button>
          }
          sublineElement="Have a large or unusual item that needs scanning? Our Innovation Lab specializes in handling special requests, even for the most challenging projects."
        />
      </GalleryTile>

      <FeedbackForm defaultTopic="3D Scan Service" />
    </main>
  );
}
