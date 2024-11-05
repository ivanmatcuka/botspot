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
        primaryCta={<Button variant="primary">Read Our Story</Button>}
        secondaryCta={<Button variant="secondary">Visit Career Page</Button>}
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
            cta={<Button variant="primary">Check Our Openings</Button>}
            headline="Want to be part of our team?"
            subline="Your Opportunity"
          />
        </PageContainer>
      </Box>

      <PageContainer mt={{ xs: 5, md: 10 }}>
        <MainBlock
          cta={<Button variant="primary">Read Full Story...</Button>}
          headline="Delivering excellence for over ten years."
          subline="Our Story"
        />
      </PageContainer>

      <Tile headline="How it all began">
        <Typography variant="body1">
          New York, 2010. Thomas Strenger, a German engineer and TV producer,
          together with a friend is preparing a report on the first store in the
          US that concentrates completely on 3D printing. They are fascinated by
          the new technology and decide spontaneously: this is what we need to
          export to Berlin! After thorough preparation, the first shop for 3D
          printers, filaments and more opens its doors in the trendy
          neighborhood of Kreuzberg’s Moritzplatz.
        </Typography>
      </Tile>

      <FeedbackForm />
    </main>
  );
}
