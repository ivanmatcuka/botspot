import { MainBlock } from '../components/MainBlock/MainBlock';
import { Button } from '../components/Button/Button';
import { Box, Grid, Typography } from '@mui/material';
import { SecondaryBlock } from '../components/SecondaryBlock/SecondaryBlock';
import { Tile } from '../components/Tile/Tile';
import { FeedbackForm } from '../components/FeedbackForm/FeedbackForm';
import { Banner } from '../components/Banner/Banner';
import Image from 'next/image';

export default function Products() {
  return (
    <main className="">
      <Banner
        assetUrl="/img/banners/products.png"
        headline="PRODUCTS"
        subline="Generate photorealistic 3D models with unmatched quality and breathtaking textures in almost no time. "
        primaryCta={<Button variant="primary">Download Data Sheets</Button>}
        secondaryCta={<Button variant="secondary">See Areas of Use</Button>}
      />

      <MainBlock
        subline="Effortless Workflow"
        headline="3D Scanners made by botspot are easy to use and come with a fully automated software package."
      />

      <Tile headline="3D Full Body Scans">
        <Typography variant="body1">
          With 3D full-body scans, the best results are achieved when all images
          are generated simultaneously, since even involuntary micro movements
          such as blinking, breathing, or maintaining balance can distort the
          scanning result. Our 3D full-body scanners are therefore equipped with
          a variety of cameras that capture a person from all possible
          perspectives.
        </Typography>
      </Tile>
      <Tile headline="3D Object Scans">
        <Typography variant="body1">
          3D object scanners require significantly fewer cameras than 3D
          full-body scanners as the scan object does not move. The object is
          placed on a turntable and images can be taken successively. We offer
          both classic 3D scanners with monochrome turntables and
          high-performance scanners with fully transparent turntables.
        </Typography>
      </Tile>
      <Tile headline="Fully Automated Software Package">
        <Typography variant="body1">
          Botspot scanners come with a fully automated software package in order
          to scale up 3D asset production and bring down the cost per model.
        </Typography>
      </Tile>
      <SecondaryBlock
        assetUrl="/img/products/1.png"
        headline="Botscan NEO"
        subline="Smart 3D fullbody scanner for high volume 3D model production"
        primaryCta={<Button variant="primary">Explore Neo</Button>}
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
      />

      <SecondaryBlock
        assetUrl="/img/products/2.png"
        headline="3D Studio"
        subline="Highly flexible and adaptable 3D object scanner for precise photogrammetry"
        primaryCta={<Button variant="primary">Explore 3D Studio</Button>}
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
      />
      <SecondaryBlock
        assetUrl="/img/products/3.png"
        headline="3D Object"
        subline="Fully automated 3D object scanner for precise photogrammetry"
        primaryCta={<Button variant="primary">Explore 3D Object</Button>}
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
      />

      <Box
        width="100%"
        bgcolor="grey.100"
        display="flex"
        flexDirection="column"
        alignItems="center"
        py={{ xs: 6, md: 10 }}
      >
        <Box maxWidth="xl">
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <Image
                src="/img/products/4.png"
                width={493}
                height={304}
                alt="Custom Solutions"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SecondaryBlock
                subline="Discover our Areas of Use with a diverse range of applications and industries."
                headline="Our Scanners in Action"
                primaryCta={
                  <Button variant="primary">Explore Applications</Button>
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <FeedbackForm />
    </main>
  );
}
