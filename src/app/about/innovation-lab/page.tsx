import { MainBlock } from '../../components/MainBlock/MainBlock';
import { Button } from '../../components/Button/Button';
import { Tile } from '../../components/Tile/Tile';
import { SecondaryBlock } from '../../components/SecondaryBlock/SecondaryBlock';

import { getPostBySlug } from '@/services/blogService';
import { Post } from '@/app/components/Post/Post';

import { Box, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const POST_SLUG = 'scanning-horses-photogrammetry-brings-tv-series-to-life';

export default async function InnovationLab() {
  const data = await getPostBySlug(POST_SLUG);

  return (
    <main className="">
      <SecondaryBlock
        mediaBlockOptions={{
          assetUrl: '/img/banners/innovation-lab.png',
        }}
        subline="Our Innovation Lab operates as an interface between research and industrial production, assessing Custom Solutions and Special Requests."
        headline="Innovation Lab"
        primaryCta={
          <Link href="/innovation-lab">
            <Button variant="primary">Contact Innovation Lab</Button>
          </Link>
        }
        secondaryCta={
          <Link href="/blog">
            <Button variant="secondary">Visit Blog</Button>
          </Link>
        }
        banner
      />

      <MainBlock
        headline="We lead in innovation with advanced 3D scanning technology, delivering state-of-the-art solutions."
        subline="How We Drive Innovation"
      />

      <Tile headline="Internal R&D">
        <Typography variant="body1">
          A current focus of our development work is the qualified and
          repeatable calibration of full-body scanning systems, rising to the
          related challenge of ensuring millimeter-accurate measurements and
          establishing universal standards in this field.
        </Typography>
      </Tile>
      <Tile headline="Marketing Ready 3D Models">
        <Typography variant="body1">
          Use our efficient scanning solutions for creating high volume
          marketing-ready 3D models, which in many cases do not require any
          post-processing. Our detailed 3D scans provide the perfect basis for
          any commercial application.
        </Typography>
      </Tile>
      <Tile headline="Marketing Ready 3D Models">
        <Typography variant="body1">
          Use our efficient scanning solutions for creating high volume
          marketing-ready 3D models, which in many cases do not require any
          post-processing. Our detailed 3D scans provide the perfect basis for
          any commercial application.
        </Typography>
      </Tile>

      <Box bgcolor="grey.100" py={{ xs: 5, md: 10 }} overflow="auto">
        <MainBlock
          headline="We’re on a mission to build a world-class 3D manufacturing company."
          subline="Our Innovation Lab"
          mt={{}}
          cta={
            <Link href="/blog">
              <Button variant="primary">Visit Blog</Button>
            </Link>
          }
        />

        <Container maxWidth="xl">
          <Grid container xs={10} mx="auto">
            <Grid item xs>
              <Post
                title={data.title.rendered}
                excerpt={data.excerpt.rendered}
                cta={
                  <Link href={`/blog/${data.id}`}>
                    <Button variant="secondary">Read Full Story</Button>
                  </Link>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
