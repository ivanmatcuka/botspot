'use client';

import { Box, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Post } from '../components/Post/Post';
import { Button } from '../components/Button/Button';

export default function DownloadArea() {
  const { push } = useRouter();

  return (
    <Box maxWidth="xl" className="w-full flex justify-center" mx="auto">
      <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} xs={10}>
        <Grid item xs={12} md={6} lg={4}>
          <Post
            title="Botscan NEO"
            excerpt="3D Fullbody Scanner"
            cta={
              <Button
                variant="secondary"
                onClick={() => push('https://botscan.io')}
              >
                Read Full Story
              </Button>
            }
            // featuredImage={featuredImage}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Post
            title="Botscan NEO"
            excerpt="3D Fullbody Scanner"
            cta={
              <Button
                variant="secondary"
                onClick={() => push('https://botscan.io')}
              >
                Read Full Story
              </Button>
            }
            // featuredImage={featuredImage}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Post
            title="Botscan NEO"
            excerpt="3D Fullbody Scanner"
            cta={
              <Button
                variant="secondary"
                onClick={() => push('https://botscan.io')}
              >
                Read Full Story
              </Button>
            }
            // featuredImage={featuredImage}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
