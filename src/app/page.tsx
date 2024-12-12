import { generateSeo } from './utils';

import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm';
import { LandingPageProduct } from '@/app/components/LandingPageProduct';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { PartnerLogo } from '@/app/components/PartnerLogo';
import { Tile } from '@/app/components/Tile/Tile';
import { getPage, getProducts } from '@/app/service';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('home');

  if (!page) {
    return {
      title: 'botspot',
    };
  }

  return (
    generateSeo(page) ?? {
      title: `${page.title.rendered} – botspot`,
    }
  );
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
          <Button href="/products/botscan-neo" variant="primary">
            Explore NEO
          </Button>
        }
        secondaryCta={
          <Button href="/download-area/botscan-neo" variant="secondary">
            Download Data Sheet
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
