import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm';
import { LandingPageProduct } from '@/app/components/LandingPageProduct';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { PartnerLogo } from '@/app/components/PartnerLogo';
import { Tile } from '@/app/components/Tile/Tile';
import { getProducts } from '@/app/service';
import { generatePageMetadata } from '@/app/utils';
import { createTranslation } from '@/i18n/server';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('home');
}

export default async function Home() {
  const { data: products } = await getProducts();
  const { t } = await createTranslation('en', ['landing-page', 'common']);

  return (
    <main className="">
      <Banner
        headline={t('landing-page:banner.headline')}
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
        sublineElement={t('landing-page:banner.sublineText')}
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
                {t('landing-page:mainBlock.cta')}
              </Button>
            }
            headline={t('landing-page:mainBlock.headline')}
            subline={t('landing-page:mainBlock.subline')}
          />
        </PageContainer>
        <Tile headline={t('landing-page:tiles.first.headline')}>
          <Typography variant="body1">
            {t('landing-page:tiles.first.text')}
          </Typography>
        </Tile>
        <Tile headline={t('landing-page:tiles.second.headline')}>
          <Typography variant="body1">
            {t('landing-page:tiles.second.text')}
          </Typography>
        </Tile>
      </Box>
      <FeedbackForm />
    </main>
  );
}
