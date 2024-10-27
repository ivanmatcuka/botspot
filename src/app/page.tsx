import { ScrollableBlock } from './ScrollableBlock';
import { PartnerLogo } from './PartnerLogo';

import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { Banner } from '@/app/components/Banner/Banner';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';
import { Button } from '@/app/components/Button/Button';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { getProducts, CustomFields } from '@/services/mainService';

import { Box, Typography } from '@mui/material';
import { WP_REST_API_Attachment } from 'wp-types';

export default async function Home() {
  const { data: products } = await getProducts();

  return (
    <main className="">
      <Banner
        headline="THE WORLD’S MOST VERSATILE 3D SCANNERS"
        mediaBlockOptions={{
          assetUrl: '/videos/landing-page.mp4',
        }}
        primaryCta={
          <Button href="/products/botscan-neo" variant="primary">
            Explore NEO
          </Button>
        }
        secondaryCta={
          <Button href="/download-area" variant="secondary">
            Download Data Sheet
          </Button>
        }
        subline="With over 10 years of experience in photogrammetry, botspot helps you realize your vision with an unmatched level of adaptability."
      />

      <Box
        className="no-scrollbar h-[80px]"
        display="flex"
        maxWidth="xl"
        mx="auto"
        my={{ xs: 8, md: 10 }}
        overflow="scroll"
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

      {products.map((product) => {
        if (!product.acf) return null;

        const imagesUrls =
          (product.acf as CustomFields).photo_gallery?.animation
            .flat()
            .map((url) => url.full_image_url) ?? [];

        const featuredImage =
          (
            product._embedded?.[
              'wp:featuredmedia'
            ]?.[0] as WP_REST_API_Attachment
          )?.source_url ?? '/img/banners/innovation-lab.png';

        const contentBlock = (
          <SecondaryBlock
            headline={product.title.rendered}
            primaryCta={
              <Button href={`/products/${product.slug}`} variant="primary">
                Explore {product.title.rendered}
              </Button>
            }
            secondaryCta={
              <Button href="/download-area" variant="secondary">
                Download Data Sheet
              </Button>
            }
            sublineElement={product.excerpt.rendered}
          />
        );

        return imagesUrls.length ? (
          <ScrollableBlock imagesUrls={imagesUrls} key={product.id}>
            {contentBlock}
          </ScrollableBlock>
        ) : (
          <>
            <MediaBlock assetUrl={featuredImage} key={product.id} />
            <PageContainer banner>{contentBlock}</PageContainer>
          </>
        );
      })}

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
            subline="How we can help"
          />
        </PageContainer>
        <Tile headline="How We Can Help">
          <Typography variant="body1">
            Each business is different. So let&apos;s find out what you need.
            Our experts will guide and support you on the way to the fitting
            solution – be it 3D scan services, custom solutions or tailoring
            your individual workflow.
          </Typography>
        </Tile>
        <Tile headline="Buy At Discount">
          <Typography variant="body1">
            No risk – just fun: If you decide to purchase one of our 3D
            scanners, you will get a discount on the money you already invested
            in scan services, proof of concepts or scanner rentals.
          </Typography>
        </Tile>
      </Box>
      <FeedbackForm />
    </main>
  );
}
