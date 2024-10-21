import { PageContainer } from '../components/PageContainer/PageContainer';
import { MediaBlock } from '../components/MediaBlock/MediaBlock';

import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { getProducts } from '@/services/blogService';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D Scanners – botspot',
};

export default async function Products() {
  const products = await getProducts();

  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/img/banners/products.png',
        }}
        headline="PRODUCTS"
        subline="Generate photorealistic 3D models with unmatched quality and breathtaking textures in almost no time. "
        primaryCta={
          <Button variant="primary" href="/download-area">
            Download Data Sheets
          </Button>
        }
        secondaryCta={
          <Button variant="secondary" href="/areas">
            See Areas of Use
          </Button>
        }
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          subline="Effortless Workflow"
          headline="3D Scanners made by botspot are easy to use and come with a fully automated software package."
        />
      </PageContainer>

      <Box mb={{ xs: 10, md: 15 }}>
        <Tile headline="3D Full Body Scans">
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

      {products.data.map((product) => {
        const { picture }: any = product.acf;

        return (
          <>
            <MediaBlock
              key={product.id}
              assetUrl={picture}
              objectFit="contain"
            />

            <PageContainer mt={{ xs: 10, md: 15 }}>
              <SecondaryBlock
                subline={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: product.excerpt.rendered,
                    }}
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
            </PageContainer>
          </>
        );
      })}

      <GalleryTile imgUrl="/img/products/4.png">
        <SecondaryBlock
          subline="Discover our Areas of Use with a diverse range of applications and industries."
          headline="Our Scanners in Action"
          primaryCta={
            <Button variant="primary" href="/areas">
              Explore Applications
            </Button>
          }
        />
      </GalleryTile>

      <FeedbackForm />
    </main>
  );
}
