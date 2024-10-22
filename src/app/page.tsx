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
import { getProducts, ImageGallery } from '@/services/blogService';

import { Box, Typography } from '@mui/material';
import { WP_REST_API_Attachment } from 'wp-types';

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/videos/landing-page.mp4',
        }}
        headline="THE WORLD’S MOST VERSATILE 3D SCANNERS."
        subline="With over 10 years of experience in Photogrammetry, botspot helps you realize your vision with an unmatched level of adaptability."
        primaryCta={
          <Button variant="primary" href="/products/botscan-neo">
            Explore Neo
          </Button>
        }
        secondaryCta={
          <Button variant="secondary" href="/download-area">
            Download Data Sheet
          </Button>
        }
      />

      <Box
        my={{ xs: 8, md: 10 }}
        px={{ xs: 4, md: 8 }}
        display="flex"
        mx="auto"
        overflow="scroll"
        className="no-scrollbar h-[80px]"
        maxWidth="xl"
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

      {products.data.map((product) => {
        if (!product.acf) return null;

        const imagesUrls = (product.acf as ImageGallery).photo_gallery.animation
          .flat()
          .map((url) => url.full_image_url);

        const featuredImage =
          (
            product._embedded?.[
              'wp:featuredmedia'
            ]?.[0] as WP_REST_API_Attachment
          )?.source_url ?? '/3d_object.png';

        const contentBlock = (
          <SecondaryBlock
            subline={
              <span
                dangerouslySetInnerHTML={{ __html: product.excerpt.rendered }}
              />
            }
            headline={product.title.rendered}
            primaryCta={
              <Button variant="primary" href={`/products/${product.slug}`}>
                Explore {product.title.rendered}
              </Button>
            }
            secondaryCta={
              <Button variant="secondary" href="/download-area">
                Download Data Sheet
              </Button>
            }
          />
        );

        return imagesUrls.length ? (
          <ScrollableBlock key={product.id} imagesUrls={imagesUrls}>
            {contentBlock}
          </ScrollableBlock>
        ) : (
          <>
            <MediaBlock key={product.id} assetUrl={featuredImage} />
            <PageContainer banner>{contentBlock}</PageContainer>
          </>
        );
      })}

      <Box
        width="100%"
        bgcolor="grey.100"
        display="flex"
        flexDirection="column"
        py={{ xs: 4, md: 10 }}
      >
        <PageContainer mb={{ xs: 3, md: 6 }}>
          <MainBlock
            subline="How we can help"
            headline="Our services go beyond the simple act of ownership, exploring ways of collaboration and flexibility."
            cta={
              <Button variant="primary" href="/service">
                Explore Our Services
              </Button>
            }
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
