import { MainBlock } from './components/MainBlock/MainBlock';
import { Button } from './components/Button/Button';
import { SecondaryBlock } from './components/SecondaryBlock/SecondaryBlock';
import { Tile } from './components/Tile/Tile';
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
import { Banner } from './components/Banner/Banner';
import { ScrollableBlock } from './ScrollableBlock';
import { PageContainer } from './components/PageContainer/PageContainer';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

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
          <Link href="/products/botscan-neo">
            <Button variant="primary">Explore Neo</Button>
          </Link>
        }
        secondaryCta={
          <Link href="/download-area">
            <Button variant="secondary">Download Data Sheet</Button>
          </Link>
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
        <Image
          width={168}
          height={80}
          src="/img/partners/canon.png"
          alt=""
          className="object-contain flex-shrink-0"
        />
        <Image
          width={168}
          height={80}
          src="/img/partners/umg.png"
          alt=""
          className="object-contain flex-shrink-0"
        />
        <Image
          width={168}
          height={80}
          src="/img/partners/illies.png"
          alt=""
          className="object-contain flex-shrink-0"
        />
        <Image
          width={168}
          height={80}
          src="/img/partners/iluikii.png"
          alt=""
          className="object-contain flex-shrink-0"
        />
        <Image
          width={168}
          height={80}
          src="/img/partners/max-plank.png"
          alt=""
          className="object-contain flex-shrink-0"
        />
        <Image
          width={168}
          height={80}
          src="/img/partners/theater.png"
          alt=""
          className="object-contain flex-shrink-0"
        />
        <Image
          width={168}
          height={80}
          src="/img/partners/invrsion.png"
          alt=""
          className="object-contain flex-shrink-0"
        />
        <Image
          width={168}
          height={80}
          src="/img/partners/vyking.png"
          alt=""
          className="object-contain flex-shrink-0"
        />
        <Image
          width={168}
          height={80}
          src="/img/partners/vrinsight.png"
          alt=""
          className="object-contain flex-shrink-0"
        />
        <Image
          width={168}
          height={80}
          src="/img/partners/thyng.png"
          alt=""
          className="object-contain flex-shrink-0"
        />
        <Image
          width={168}
          height={80}
          src="/img/partners/acod.png"
          alt=""
          className="object-contain flex-shrink-0"
        />
      </Box>

      <ScrollableBlock assetUrl="BotscanNEO_Landing00090">
        <SecondaryBlock
          headline="botscan NEO"
          subline="Smart 3D fullbody scanner for high volume 3D model production"
          primaryCta={
            <Link href="/products/botscan-neo">
              <Button variant="primary">Explore Neo</Button>
            </Link>
          }
          secondaryCta={
            <Button variant="secondary">Download Data Sheet</Button>
          }
        />
      </ScrollableBlock>

      <ScrollableBlock assetUrl="Object_Studio_Landing00090">
        <SecondaryBlock
          headline="Object Studio"
          subline="Highly flexible and adaptable 3D object scanner for precise photogrammetry"
          primaryCta={
            <Link href="/products/3d-studio">
              <Button variant="primary">Object Studio</Button>
            </Link>
          }
          secondaryCta={
            <Link href="/download-area">
              <Button variant="secondary">Download Data Sheet</Button>
            </Link>
          }
        />
      </ScrollableBlock>

      <ScrollableBlock assetUrl="ObjectScanner_Landing00090">
        <SecondaryBlock
          headline="3D Object"
          subline="Fully automated 3D object scanner for precise photogrammetry"
          primaryCta={
            <Link href="/products/3d-object">
              <Button variant="primary">Explore 3D Object</Button>
            </Link>
          }
          secondaryCta={
            <Link href="/download-area">
              <Button variant="secondary">Download Data Sheet</Button>
            </Link>
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
        <PageContainer>
          <MainBlock
            subline="How we can help"
            headline="Our services go beyond the simple act of ownership, exploring ways of collaboration and flexibility."
            cta={
              <Link href="/service">
                <Button variant="primary">Explore Our Services</Button>
              </Link>
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
