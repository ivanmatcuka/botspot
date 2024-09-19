import { MainBlock } from './components/MainBlock/MainBlock';
import { Button } from './components/Button/Button';
import { Box, Typography } from '@mui/material';
import { SecondaryBlock } from './components/SecondaryBlock/SecondaryBlock';
import { Tile } from './components/Tile/Tile';
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';

export default function Home() {
  return (
    <main className="">
      <MainBlock
        assetUrl="/placeholder.png"
        subline="What we do"
        headline="Professional 3D Scanners for rapid, highly precise and absolutely colorfast 3D data."
        cta={<Button variant="primary">See All Products</Button>}
      />
      <SecondaryBlock
        assetUrl="/botscan_neo.png"
        headline="Botscan NEO"
        subline="Smart 3D fullbody scanner for high volume 3D model production"
        primaryCta={<Button variant="primary">Explore Neo</Button>}
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
      />
      <SecondaryBlock
        assetUrl="/3d_studio.png"
        headline="3D Studio"
        subline="Highly flexible and adaptable 3D object scanner for precise photogrammetry"
        primaryCta={<Button variant="primary">Explore 3D Studio</Button>}
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
      />
      <SecondaryBlock
        assetUrl="/3d_object.png"
        headline="3D Object"
        subline="Fully automated 3D object scanner for precise photogrammetry"
        primaryCta={<Button variant="primary">Explore 3D Object</Button>}
        secondaryCta={<Button variant="secondary">Download Data Sheet</Button>}
      />
      <SecondaryBlock
        assetUrl="/custom_solutions.png"
        headline="Custom Solutions"
        subline="Our Innovation Lab will assist you with special requirements in order to make your vision come true."
        primaryCta={<Button variant="primary">See Custom Solutions</Button>}
        secondaryCta={<Button variant="secondary">Visit Innovation Lab</Button>}
      />
      <Box
        width="100%"
        bgcolor="grey.100"
        display="flex"
        flexDirection="column"
      >
        <MainBlock
          assetUrl="/placeholder.png"
          subline="How we can help"
          headline="Our services go beyond the simple act of ownership, exploring ways of collaboration and flexibility."
          cta={<Button variant="primary">Explore Our Services</Button>}
        />
        <Tile headline="Send Us Objects">
          <Typography variant="body1">
            Send us your items, we'll scan them and send you the marketing-ready
            3D models.
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
      </Box>
      <MainBlock
        subline="About Us"
        headline="Since 2013, botspot has been bridging the gap between physical and digital."
        cta={<Button variant="primary">See our Story</Button>}
      />
      <Tile headline="Our Work Ethic">
        <Typography variant="body1">
          At botspot we share the passion of expanding the boundaries of 3D
          digitalization and 3D scanning, particularly in e-commerce and health
          care. We love to set new standards and to redefine the rules in these
          fields.
        </Typography>
      </Tile>
      <FeedbackForm />
    </main>
  );
}
