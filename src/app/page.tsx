import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

import { Banner } from '@/components/Banner/Banner';
import { Button } from '@/components/Button/Button';
import { FeedbackForm } from '@/components/FeedbackForm';
import { LandingPageProduct } from '@/components/LandingPageProduct';
import { MainBlock } from '@/components/MainBlock/MainBlock';
import { PageContainer } from '@/components/PageContainer';
import { PartnerLogo } from '@/components/PartnerLogo';
import { Tile } from '@/components/Tile/Tile';
import { getProducts } from '@/service';
import { generatePageMetadata } from '@/utils';


export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('home');
}

export default async function Home() {
  const { data: products } = await getProducts();

  return (
    <main className="">
      <Banner
        headline="THE WORLD’S BEST FOR EXCEPTIONAL SCANNING SOLUTIONS"
        mediaBlockOptions={{
          assetUrl: '/videos/landing-page.mp4',
        }}
        primaryCta={
          <Button href="/products" variant="primary">
            Explore Products
          </Button>
        }
        secondaryCta={
          <Button href="/areas" variant="secondary">
            Explore Areas of Use
          </Button>
        }
        sublineElement="With over 10 years of experience in photogrammetry, botspot helps you realize your vision with an unmatched level of adaptability."
      />

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        maxWidth="xl"
        mx="auto"
        my={{ xs: 8, md: 10 }}
        px={{ xs: 4, md: 8 }}
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
        <PartnerLogo name="vertex" />
      </Box>

      {products.map((product) => (
        <LandingPageProduct key={product.id} product={product} />
      ))}

      <Box
        bgcolor="grey.100"
        display="flex"
        flexDirection="column"
        py={{ xs: 4, md: 10 }}
        width="100%"
      >
        <PageContainer mb={{ xs: 3, md: 6 }}>
          <MainBlock
            cta={
              <Button href="/service" variant="primary">
                Explore Our Services
              </Button>
            }
            headline="Our services go beyond the simple act of ownership, exploring ways of collaboration and flexibility."
            subline="How We Can Help"
          />
        </PageContainer>
        <Tile headline="In-House Scanning">
          <Typography variant="body1">
            Visit our office for an in-person scan, or send your items to us,
            and our skilled team will capture and deliver detailed 3D models
            tailored to your requirements.
          </Typography>
        </Tile>
        <Tile headline="Collaboration Services">
          <Typography variant="body1">
            Comprehensive support to enhance your projects, including expert
            consulting and flexible short-term or long-term rental solutions
            based on your needs.
          </Typography>
        </Tile>
      </Box>
      <FeedbackForm />
    </main>
  );
}
