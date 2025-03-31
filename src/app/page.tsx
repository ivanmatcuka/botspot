import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

import { Banner } from '@/components/Banner';
import { Button } from '@/components/Button';
import { FeedbackForm } from '@/components/FeedbackForm';
import { LandingPageProduct } from '@/components/LandingPageProduct';
import { MainBlock } from '@/components/MainBlock';
import { PageContainer } from '@/components/PageContainer';
import { PartnerLogo } from '@/components/PartnerLogo';
import { Tile } from '@/components/Tile';
import { createTranslation } from '@/i18n/server';
import { getProducts } from '@/service';
import { generatePageMetadata } from '@/utils';

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
            {t('landing-page:banner.primaryCta')}
          </Button>
        }
        secondaryCta={
          <Button href="/areas" variant="secondary">
            {t('landing-page:banner.secondaryCta')}
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
