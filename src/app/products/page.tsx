import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { MediaBlock } from '@/app/components/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { CustomFields, getProducts } from '@/app/service';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D Scanners – botspot',
};

export default async function Products() {
  const { data: products } = await getProducts();

  return (
    <main className="">
      <Banner
        headline="PRODUCTS"
        mediaBlockOptions={{
          assetUrl: '/img/banners/products.png',
        }}
        primaryCta={
          <Button href="/download-area" variant="primary">
            Download Data Sheets
          </Button>
        }
        secondaryCta={
          <Button href="/areas" variant="secondary">
            See Areas of Use
          </Button>
        }
        sublineElement="Generate photorealistic 3D models with unmatched quality and breathtaking textures in almost no time. "
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="3D Scanners made by botspot are easy to use and come with a fully automated software package."
          subline="Effortless Workflow"
        />
      </PageContainer>

      <Box mb={{ xs: 10, md: 15 }}>
        <Tile headline="3D Full-Body Scans">
          <Typography variant="body1">
            With 3D full-body scans, the best results are achieved when all
            images are generated simultaneously, since even involuntary micro
            movements such as blinking, breathing, or maintaining balance can
            distort the scanning result. Our 3D full-body scanners are therefore
            equipped with a variety of cameras that capture a person from all
            possible perspectives.
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
            botspot scanners come with a fully automated software package in
            order to scale up 3D asset production and bring down the cost per
            model.
          </Typography>
        </Tile>
      </Box>

      {products.map((product, index) => {
        const { picture }: Partial<CustomFields> = product.acf ?? {};

        return (
          <div key={index}>
            <MediaBlock
              assetUrl={picture}
              containerClassName="block md:hidden"
              objectFit="cover"
              banner
            />

            <MediaBlock
              assetUrl={picture}
              containerClassName="hidden md:block"
              objectFit="contain"
              banner
            />

            <PageContainer mt={{ xs: 10, md: 15 }}>
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
            </PageContainer>
          </div>
        );
      })}

      <GalleryTile imgUrl="/img/products/4.png">
        <SecondaryBlock
          headline="Our Scanners in Action"
          primaryCta={
            <Button href="/areas" variant="primary">
              Explore Applications
            </Button>
          }
          sublineElement="Discover our areas of use with a diverse range of applications and industries."
        />
      </GalleryTile>

      <FeedbackForm />
    </main>
  );
}
