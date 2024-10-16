import { ScrollableBlock } from './ScrollableBlock';
import { PartnerLogo } from './PartnerLogo';

import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { Banner } from '@/app/components/Banner/Banner';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';
import { Button } from '@/app/components/Button/Button';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';

import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/videos/landing-page.mp4',
        }}
        headline="THE WORLD’S MOST VERSATILE 3D SCANNERS."
        subline="With over 10 years of experience in Photogrammetry, botspot helps you realize your vision with an unmatched level of adaptability."
        primaryCta={
          <Button variant="primary" href="/products/botscan-neo">
            Explore Neo
          </Button>
        }
        secondaryCta={
          <Button variant="secondary" href="/download-area">
            Download Data Sheet
          </Button>
        }
      />

      <Box
        my={{ xs: 8, md: 10 }}
        px={{ xs: 4, md: 8 }}
        display="flex"
        mx="auto"
        overflow="scroll"
        className="no-scrollbar h-[80px]"
        maxWidth="xl"
      >
        <PartnerLogo name="canon" />
        <PartnerLogo name="umg" />
        <PartnerLogo name="illies" />
        <PartnerLogo name="iluikii" />
        <PartnerLogo name="max-plank" />
        <PartnerLogo name="theater" />
        <PartnerLogo name="invrsion" />
        <PartnerLogo name="vyking" />
        <PartnerLogo name="vrinsight" />
        <PartnerLogo name="thyng" />
        <PartnerLogo name="acod" />
      </Box>

      <ScrollableBlock assetUrl="BotscanNEO_Landing00090">
        <SecondaryBlock
          headline="botscan NEO"
          subline="Smart 3D fullbody scanner for high volume 3D model production"
          primaryCta={
            <Button variant="primary" href="/products/botscan-neo">
              Explore Neo
            </Button>
          }
          secondaryCta={
            <Button variant="secondary" href="/download-area">
              Download Data Sheet
            </Button>
          }
        />
      </ScrollableBlock>

      <ScrollableBlock assetUrl="Object_Studio_Landing00090">
        <SecondaryBlock
          headline="Object Studio"
          subline="Highly flexible and adaptable 3D object scanner for precise photogrammetry"
          primaryCta={
            <Button variant="primary" href="/products/3d-studio">
              Object Studio
            </Button>
          }
          secondaryCta={
            <Button variant="secondary" href="/download-area">
              Download Data Sheet
            </Button>
          }
        />
      </ScrollableBlock>

      <ScrollableBlock assetUrl="ObjectScanner_Landing00090">
        <SecondaryBlock
          headline="3D Object"
          subline="Fully automated 3D object scanner for precise photogrammetry"
          primaryCta={
            <Button variant="primary" href="/products/3d-object">
              Explore 3D Object
            </Button>
          }
          secondaryCta={
            <Button variant="secondary" href="/download-area">
              Download Data Sheet
            </Button>
          }
        />
      </ScrollableBlock>

      <Box
        width="100%"
        bgcolor="grey.100"
        display="flex"
        flexDirection="column"
        py={{ xs: 4, md: 10 }}
      >
        <PageContainer mb={{ xs: 3, md: 6 }}>
          <MainBlock
            subline="How we can help"
            headline="Our services go beyond the simple act of ownership, exploring ways of collaboration and flexibility."
            cta={
              <Button variant="primary" href="/service">
                Explore Our Services
              </Button>
            }
          />
        </PageContainer>
        <Tile headline="How We Can Help">
          <Typography variant="body1">
            Each business is different. So let&apos;s find out what you need.
            Our experts will guide and support you on the way to the fitting
            solution – be it 3D scan services, custom solutions or tailoring
            your individual workflow.
          </Typography>
        </Tile>
        <Tile headline="Buy At Discount">
          <Typography variant="body1">
            No risk – just fun: If you decide to purchase one of our 3D
            scanners, you will get a discount on the money you already invested
            in scan services, proof of concepts or scanner rentals.
          </Typography>
        </Tile>
      </Box>
      <FeedbackForm />
    </main>
  );
}
