import { Button } from '@/app/components/Button/Button';
import { Post } from '@/app/components/Post/Post';

import { Box, Grid } from '@mui/material';
import Link from 'next/link';
import { PageContainer } from '../components/PageContainer/PageContainer';
import { MainBlock } from '../components/MainBlock/MainBlock';

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
                <Link href="/products/botscan-neo">
                  <Button variant="secondary">Download Data Sheet</Button>
                </Link>
              }
              featuredImage="/img/products/1.png"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Post
              title="3D Object"
              excerpt="3D Item Scanner"
              cta={
                <Link href="/products/3d-object">
                  <Button variant="secondary">Download Data Sheet</Button>
                </Link>
              }
              featuredImage="/img/products/2.png"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Post
              title="3D Studio"
              excerpt="3D Item Scanner"
              cta={
                <Link href="https://botscan.io">
                  <Button variant="secondary">Download Data Sheet</Button>
                </Link>
              }
              featuredImage="/img/products/3.png"
            />
          </Grid>
        </Grid>
      </PageContainer>
    </main>
  );
}
