import { People } from './People';

import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { Tile } from '@/app/components/Tile/Tile';
import { getPeople } from '@/app/service';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT US – botspot',
};

export default async function About() {
  const { data } = await getPeople();

  return (
    <main className="">
      <Banner
        headline="ABOUT US"
        mediaBlockOptions={{
          assetUrl: '/img/banners/about.png',
        }}
        primaryCta={
          <Button href="#our-story" variant="primary">
            Read Our Story
          </Button>
        }
        secondaryCta={
          <Button href="/about/careers" variant="secondary">
            Visit Career Page
          </Button>
        }
        sublineElement="Whenever 3D scanning technology can shift the status quo, botspot is here for you to innovate."
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="We set new standards in the 3D scanning industry."
          subline="Our Mission"
        />
      </PageContainer>

      <Tile headline="Empowering Customers">
        <Typography variant="body1">
          Our goal is to strengthen our customer’s efficiency, enabling them to
          use their resources more effectively in order to meet the
          ever-increasing demands of a rapidly evolving world.
        </Typography>
      </Tile>
      <Tile headline="Streamlining Processes">
        <Typography variant="body1">
          With the help of digitalization and process optimization, we achieve
          outstanding results for our worldwide customers.
        </Typography>
      </Tile>
      <Tile headline="Made in Germany">
        <Typography variant="body1">
          Since 2013, botspot is dedicated to the development of the most
          innovative photogrammetric 3D scanning solutions “Made in Germany”.
        </Typography>
      </Tile>

      <PageContainer mb={8} mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="With commitment and tenacity, we make the impossible possible."
          subline="Our Team"
          botomless
        />
      </PageContainer>

      <PageContainer mt={0}>
        <People data={data} />
      </PageContainer>

      <Box
        bgcolor="grey.100"
        display="flex"
        flexDirection="column"
        py={{ xs: 5, md: 10 }}
        width="100%"
      >
        <PageContainer mb={0} my={0}>
          <MainBlock
            cta={
              <Button href="/about/careers" variant="primary">
                Check Our Openings
              </Button>
            }
            headline="Want to be part of our team?"
            subline="Your Opportunity"
          />
        </PageContainer>
      </Box>

      <PageContainer id="our-story" mt={{ xs: 5, md: 10 }}>
        <MainBlock
          headline="Delivering excellence for over ten years."
          subline="Our Story"
        />
      </PageContainer>

      <Tile headline="How it all began">
        <Typography variant="body1">
          In 2010, inspired by a 3D printing shop in New York, German engineer
          Thomas Strenger set out to bring this revolutionary technology to
          Berlin. Starting with Germany’s first 3D printing shop in Moritzplatz,
          Kreuzberg, the team quickly identified a missing piece: a precise,
          color-true 3D scanner. Driven by their background in television, they
          turned to photogrammetry, debuting their first full-body scanner,
          BOTSCAN 01, that same year. Thus the predecessor of our NEO was born!
          As interest grew—from personal 3D prints to high-quality digital
          avatars—the team shifted focus to advancing their scanning technology.
          They secured patents, developed medical and industrial applications,
          and earned the trust of international brands in fashion, sports, and
          automotive sectors. Their scanners soon became the standard for speed,
          precision, and scalability, making 3D digitization more accessible to
          a growing global market. Today, botspot is based in Berlin’s tech hub,
          Adlershof, committed to creating innovative scanning solutions, .
          Photogrammetry remains their foundation—while the sky’s the limit.
        </Typography>
      </Tile>

      <FeedbackForm />
    </main>
  );
}
