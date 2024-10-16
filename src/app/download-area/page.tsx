import { PageContainer } from '../components/PageContainer/PageContainer';
import { MainBlock } from '../components/MainBlock/MainBlock';

import { Button } from '@/app/components/Button/Button';
import { Post } from '@/app/components/Post/Post';

import { Grid } from '@mui/material';

export default function DownloadArea() {
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
          <Grid item xs={12} md={6} lg={4}>
            <Post
              title="botscan NEO"
              excerpt="3D Fullbody Scanner"
              cta={
                <Button variant="secondary" href="/products/botscan-neo">
                  Download Data Sheet
                </Button>
              }
              featuredImage="/img/products/1.png"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Post
              title="3D Object"
              excerpt="3D Item Scanner"
              cta={
                <Button variant="secondary" href="/products/3d-object">
                  Download Data Sheet
                </Button>
              }
              featuredImage="/img/products/2.png"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Post
              title="3D Studio"
              excerpt="3D Item Scanner"
              cta={
                <Button variant="secondary" href="/products/3d-studio">
                  Download Data Sheet
                </Button>
              }
              featuredImage="/img/products/3.png"
            />
          </Grid>
        </Grid>
      </PageContainer>
    </main>
  );
}
