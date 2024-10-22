import { PageContainer } from '@/app/components/PageContainer/PageContainer';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { Post } from '@/app/components/Post/Post';
import { getProducts } from '@/services/mainService';

import { Grid } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DOWNLOAD AREA – botspot',
};

export default async function DownloadArea() {
  const { data: products } = await getProducts();

  return (
    <main className="m-auto">
      <PageContainer mt={8} mb={6}>
        <MainBlock
          headline="Exclusively access all relevant data about our 3D Scanners below."
          subline="Download Area"
        />
      </PageContainer>
      <PageContainer mb={8}>
        <Grid container spacing={{ xs: 2, md: 3, lg: 5 }}>
          {products.map((product, index) => {
            const { datasheet, picture }: any = product.acf;

            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Post
                  title={product.title.rendered}
                  excerpt={product.excerpt.rendered}
                  cta={
                    <Button variant="secondary" href={datasheet}>
                      Download Data Sheet
                    </Button>
                  }
                  featuredImage={picture}
                  objectFit="contain"
                />
              </Grid>
            );
          })}
        </Grid>
      </PageContainer>
    </main>
  );
}
