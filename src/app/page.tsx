import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm';
import { LandingPageProduct } from '@/app/components/LandingPageProduct';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { PartnerLogo } from '@/app/components/PartnerLogo';
import { Tile } from '@/app/components/Tile/Tile';
import { createTranslation } from '@/app/i18n/server';
import { getProducts } from '@/app/service';

import { Box, Typography } from '@mui/material';

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
          <Button href="/products/botscan-neo" variant="primary">
            {t('landing-page:banner.primaryCta')}
          </Button>
        }
        secondaryCta={
          <Button href="/download-area/botscan-neo" variant="secondary">
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
