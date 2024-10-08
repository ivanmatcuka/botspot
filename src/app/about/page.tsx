
import { People } from './People';

import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { Tile } from '@/app/components/Tile/Tile';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { Banner } from '@/app/components/Banner/Banner';
import { getPeople } from '@/services/blogService';

import { Box, Typography } from '@mui/material';

export default async function About() {
  const { data } = await getPeople();

  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/img/banners/about.png',
        }}
        headline="ABOUT US"
        subline="Whenever 3D scanning technology can shift the status quo, botspot is here for you to innovate."
        primaryCta={<Button variant="primary">Read Our Story</Button>}
        secondaryCta={<Button variant="secondary">Visit Career Page</Button>}
      />

      <MainBlock
        subline="Our Mission"
        headline="We set new standards in the 3D scanning industry."
      />

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

      <MainBlock
        subline="Our Team"
        headline="With commitment and tenacity, we make the impossible possible."
        botomless
      />

      <People data={data} />

      <Box
        width="100%"
        bgcolor="grey.100"
        display="flex"
        flexDirection="column"
        mt={{ xs: 10, md: 20 }}
      >
        <MainBlock
          subline="Your Opportunity"
          headline="Want to be part of our team?"
          cta={<Button variant="primary">Explore Our Services</Button>}
        />
      </Box>

      <MainBlock
        subline="Our Story"
        headline="Delivering excellence for over ten years."
        cta={<Button variant="primary">Explore Our Services</Button>}
      />

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
