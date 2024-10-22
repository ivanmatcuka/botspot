import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { Tile } from '@/app/components/Tile/Tile';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { getPostBySlug } from '@/services/blogService';
import { Post } from '@/app/components/Post/Post';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';
import { WP_REST_API_Attachment } from 'wp-types';

const POST_SLUG = 'scanning-horses-photogrammetry-brings-tv-series-to-life';

export const metadata: Metadata = {
  title: 'INNOVATION LAB – botspot',
};

export default async function InnovationLab() {
  const post = await getPostBySlug(POST_SLUG);

  return (
    <main className="">
      <MediaBlock assetUrl="/img/banners/innovation-lab.png" banner />
      <PageContainer banner>
        <SecondaryBlock
          subline="Our Innovation Lab operates as an interface between research and industrial production, assessing Custom Solutions and Special Requests."
          headline="Innovation Lab"
          primaryCta={<Button variant="primary">Contact Innovation Lab</Button>}
          secondaryCta={
            <Button variant="secondary" href="/blog">
              Visit Blog
            </Button>
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

      <Box bgcolor="grey.100" py={{ xs: 5, md: 10 }} overflow="auto">
        <PageContainer mb={5} mt={0}>
          <MainBlock
            headline="We’re on a mission to build a world-class 3D manufacturing company."
            subline="Our Innovation Lab"
            mt={{}}
            cta={
              <Button variant="primary" href="/blog">
                Visit Blog
              </Button>
            }
          />
        </PageContainer>
        {post && (
          <PageContainer mb={0}>
            <Post
              title={post.title.rendered}
              excerpt={post.excerpt.rendered}
              cta={
                <Button variant="secondary" href={`/blog/${post.id}`}>
                  Read Full Story
                </Button>
              }
              featuredImage={
                (
                  post._embedded?.[
                    'wp:featuredmedia'
                  ]?.[0] as WP_REST_API_Attachment
                )?.source_url
              }
            />
          </PageContainer>
        )}
      </Box>

      <FeedbackForm />
    </main>
  );
}
