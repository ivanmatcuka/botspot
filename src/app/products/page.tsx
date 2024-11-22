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
          assetUrl: '/videos/banners/products.mp4',
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
        sublineElement="Generate photorealistic 3D models with our industry-leading scanners, designed for precision, high-resolution detail, and reliable performance across any project."
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="3D Scanners made by botspot are easy to use and come with a fully automated software package."
          subline="Virtual Precision"
        />
      </PageContainer>

      <Box mb={{ xs: 10, md: 15 }}>
        <Tile headline="Full-Body Scanning">
          <Typography variant="body1">
            Capture complete, high-resolution 3D scans with our 3D Full-Body
            Scanner, designed to provide lifelike detail from head to toe.
            Perfect for applications in VR, AR, movies and gaming, our scanner
            delivers professional-grade results with ease.
          </Typography>
        </Tile>
        <Tile headline="Object Scanning">
          <Typography variant="body1">
            Achieve precise, detailed 3D scans of objects both large and small
            with our object scanners. Ideal for product design, quality control,
            and digital archiving, these scanners capture every surface and
            geometry with unmatched accuracy.
          </Typography>
        </Tile>
        <Tile headline="Software Package">
          <Typography variant="body1">
            Our scanners are automated with our Automation Suite software
            package, tailored to optimize workflow. Allowing full control of
            cameras, lighting and turntable, our software ensures seamless
            integration with your 3D scanning projects.
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
                headline={product?.acf?.['full-name'] || product.title.rendered}
                primaryCta={
                  <Button href={`/products/${product.slug}`} variant="primary">
                    Explore{' '}
                    {product?.acf?.['short-name'] || product.title.rendered}
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
