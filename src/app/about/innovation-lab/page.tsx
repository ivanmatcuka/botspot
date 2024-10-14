import { MainBlock } from '../../components/MainBlock/MainBlock';
import { Button } from '../../components/Button/Button';
import { Tile } from '../../components/Tile/Tile';
import { SecondaryBlock } from '../../components/SecondaryBlock/SecondaryBlock';

import { getPostBySlug } from '@/services/blogService';
import { Post } from '@/app/components/Post/Post';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const POST_SLUG = 'scanning-horses-photogrammetry-brings-tv-series-to-life';

export default async function InnovationLab() {
  const data = await getPostBySlug(POST_SLUG);

  return (
    <main className="">
      <MediaBlock assetUrl="/img/banners/innovation-lab.png" />
      <PageContainer banner>
        <SecondaryBlock
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
        />
      </PageContainer>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="We lead in innovation with advanced 3D scanning technology, delivering state-of-the-art solutions."
          subline="How We Drive Innovation"
        />
      </PageContainer>

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

      <Box bgcolor="grey.100" pt={{ xs: 5, md: 10 }} overflow="auto">
        <PageContainer>
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
        </PageContainer>
        <PageContainer>
          <Post
            title={data.title.rendered}
            excerpt={data.excerpt.rendered}
            cta={
              <Link href={`/blog/${data.id}`}>
                <Button variant="secondary">Read Full Story</Button>
              </Link>
            }
          />
        </PageContainer>
      </Box>

      <FeedbackForm />
    </main>
  );
}
