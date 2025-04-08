'use client';

import { FeedbackForm } from '@/components/FeedbackForm';
import LandingPageProducts from '@/components/LandingPageProducts';
import { PartnerLogo } from '@/components/PartnerLogo';
import { Banner, MainBlock, PageContainer, Tile } from '@botspot/ui';
import { Box, Skeleton, Typography } from '@mui/material';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/videos/landing-page.webm',
        }}
        primary={{
          href: '/products',
          value: 'Explore Products',
        }}
        secondary={{
          href: '/areas',
          value: 'Explore Areas of Use',
        }}
        headline="THE WORLD’S BEST FOR EXCEPTIONAL SCANNING SOLUTIONS"
        sublineElement="With over 10 years of experience in photogrammetry, botspot helps you realize your vision with an unmatched level of adaptability."
      />

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        maxWidth="xl"
        mx="auto"
        my={{ md: 10, xs: 8 }}
        px={{ md: 8, xs: 4 }}
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

      <Suspense fallback={<Skeleton height="100%" variant="rectangular" />}>
        <LandingPageProducts />
      </Suspense>

      <Box
        bgcolor="grey.100"
        display="flex"
        flexDirection="column"
        py={{ md: 10, xs: 4 }}
        width="100%"
      >
        <PageContainer mb={{ md: 6, xs: 3 }}>
          <MainBlock
            cta={{
              href: '/service',
              value: 'Explore Our Services',
              variant: 'primary',
            }}
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
