'use client';

import { MainBlock } from './components/MainBlock/MainBlock';
import { Button } from './components/Button/Button';
import { Box, Typography } from '@mui/material';
import { SecondaryBlock } from './components/SecondaryBlock/SecondaryBlock';
import { Tile } from './components/Tile/Tile';
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
import { Banner } from './components/Banner/Banner';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { push } = useRouter();

  return (
    <main className="">
      <Banner
        assetUrl="/videos/landing-page.mp4"
        headline="THE WORLD’S MOST VERSATILE 3D SCANNERS."
        subline="With over 10 years of experience in Photogrammetry, botspot helps you realize your vision with an unmatched level of adaptability."
        primaryCta={
          <Button
            variant="primary"
            onClick={() => push('/products/botscan-neo')}
          >
            Explore Neo
          </Button>
        }
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
      />

      <Box
        p={{ xs: 8, md: 10 }}
        pl={{ xs: 4, md: 8 }}
        display="flex"
        mx="auto"
        overflow="scroll"
        className="no-scrollbar"
        maxWidth="xl"
      >
        <img src="/img/partners/canon.png" alt="" />
        <img src="/img/partners/umg.png" alt="" />
        <img src="/img/partners/illies.png" alt="" />
        <img src="/img/partners/iluikii.png" alt="" />
        <img src="/img/partners/max-plank.png" alt="" />
        <img src="/img/partners/theater.png" alt="" />
        <img src="/img/partners/invrsion.png" alt="" />
        <img src="/img/partners/vyking.png" alt="" />
        <img src="/img/partners/vrinsight.png" alt="" />
        <img src="/img/partners/thyng.png" alt="" />
        <img src="/img/partners/acod.png" alt="" />
      </Box>

      <SecondaryBlock
        assetUrl="BotscanNEO_Landing00090"
        headline="Botscan NEO"
        subline="Smart 3D fullbody scanner for high volume 3D model production"
        primaryCta={
          <Button
            variant="primary"
            onClick={() => push('/products/botscan-neo')}
          >
            Explore Neo
          </Button>
        }
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
        autoplay={false}
        scrollable
        fullHeight
      />
      <SecondaryBlock
        assetUrl="ObjectScanner_Landing00090"
        headline="3D Object"
        subline="Fully automated 3D object scanner for precise photogrammetry"
        primaryCta={
          <Button variant="primary" onClick={() => push('/products/3d-object')}>
            Explore 3D Object
          </Button>
        }
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
        autoplay={false}
        scrollable
        fullHeight
      />
      <Box
        width="100%"
        bgcolor="grey.100"
        display="flex"
        flexDirection="column"
        pb={{ xs: 4, md: 10 }}
      >
        <MainBlock
          subline="How we can help"
          headline="Our services go beyond the simple act of ownership, exploring ways of collaboration and flexibility."
          cta={
            <Button variant="primary" onClick={() => push('/services')}>
              Explore Our Services
            </Button>
          }
        />
        <Tile headline="Send Us Objects">
          <Typography variant="body1">
            Send us your items, we&apos;ll scan them and send you the
            marketing-ready 3D models.
          </Typography>
        </Tile>
        <Tile headline="Buy At Discount">
          <Typography variant="body1">
            If you decide to purchase the scanner, buy our 3D scanners for a
            discount on the money you already invested.
          </Typography>
        </Tile>
      </Box>
      <FeedbackForm />
    </main>
  );
}
