import { Button } from '@/app/components/Button/Button';
import { Post } from '@/app/components/Post/Post';

import { Box, Grid } from '@mui/material';
import Link from 'next/link';


export default function DownloadArea() {
  return (
    <Box maxWidth="xl" className="w-full flex justify-center" mx="auto">
      <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} xs={10}>
        <Grid item xs={12} md={6} lg={4}>
          <Post
            title="botscan NEO"
            excerpt="3D Fullbody Scanner"
            cta={
              <Link href="https://botscan.io">
                <Button variant="secondary">Read Full Story</Button>
              </Link>
            }
            // featuredImage={featuredImage}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Post
            title="botscan NEO"
            excerpt="3D Fullbody Scanner"
            cta={
              <Link href="https://botscan.io">
                <Button variant="secondary">Read Full Story</Button>
              </Link>
            }
            // featuredImage={featuredImage}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Post
            title="botscan NEO"
            excerpt="3D Fullbody Scanner"
            cta={
              <Link href="https://botscan.io">
                <Button variant="secondary">Read Full Story</Button>
              </Link>
            }
            // featuredImage={featuredImage}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
