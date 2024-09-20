import { MainBlock } from '../components/MainBlock/MainBlock';
import { Button } from '../components/Button/Button';
import { Box, Typography } from '@mui/material';
import { Tile } from '../components/Tile/Tile';
import { FeedbackForm } from '../components/FeedbackForm/FeedbackForm';
import { Banner } from '../components/Banner/Banner';
import Image from 'next/image';

export default function Learn() {
  return (
    <main className="">
      <Banner
        assetUrl="/img/banners/products.png"
        headline="LEARN ABOUT 3D SCANNING"
        subline="Discover the fundamentals of 3D scanning and explore how this cutting-edge technology is transforming industries, from design to manufacturing."
        primaryCta={<Button variant="primary">Check Our Blog</Button>}
        secondaryCta={<Button variant="secondary">Ask Us Α Question</Button>}
      />

      <MainBlock
        subline="What Is 3D Scanning?"
        headline="3D photogrammetry scanning creates a 3D model by combining many photos taken from different angles of an object or scene."
      />

      <Tile headline="Capturing Images">
        <Typography variant="body1">
          The foundational step is acquiring multiple, overlapping photographs
          of the subject.
          <br />
          The number and quality of these images directly impact the final scan
          result.
        </Typography>
      </Tile>
      <Tile headline="Processing Images">
        <Typography variant="body1">
          Once captured, these images are fed into photogrammetry software, such
          as RealityCapture. This software identifies common reference points
          and unique features in the different images.
        </Typography>
      </Tile>
      <Tile headline="Creating 3D Models">
        <Typography variant="body1">
          For the final step, the software stitches the images together,
          applying textures and colors from the photographs to the 3D model.
        </Typography>
      </Tile>

      <Box maxWidth="xl" mx="auto">
        <Image
          src="/img/learn/1.png"
          alt=""
          width={1010}
          height={440}
          style={{ width: '100%' }}
        />
      </Box>

      <MainBlock
        subline="Questions & Articles"
        headline="Our blog offers a clear overview of 3D scanning, with insights, tips, and detailed explanations for understanding the technology."
        cta={<Button variant="primary">Visit Blog</Button>}
      />
      <FeedbackForm />
    </main>
  );
}
