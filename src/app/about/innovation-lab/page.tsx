import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { MediaBlock } from '@/app/components/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { Post } from '@/app/components/Post';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { getPostBySlug } from '@/app/service';
import { getFeaturedImageUrl } from '@/app/utils';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

const POST_SLUG = 'scanning-horses';

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
          headline="Innovation Lab"
          primaryCta={
            <Button href="/contact-us" variant="primary">
              Contact Innovation Lab
            </Button>
          }
          secondaryCta={
            <Button href="/blog" variant="secondary">
              Visit Blog
            </Button>
          }
          sublineElement="Our Innovation Lab operates as an interface between research and industrial production, assessing Custom Solutions and Special Requests."
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

      <Box bgcolor="grey.100" overflow="auto" py={{ xs: 5, md: 10 }}>
        <PageContainer mb={5} mt={0}>
          <MainBlock
            cta={
              <Button href="/blog" variant="primary">
                Visit Blog
              </Button>
            }
            headline={
              'On our constant quest to stay up to date, our 3D Academy allows for exclusive insights.'
            }
            mt={{}}
            subline="Recent Developments"
          />
        </PageContainer>
        {post && (
          <PageContainer mb={0}>
            <Post
              cta={
                <Button href={`/blog/${post.id}`} variant="secondary">
                  Read Full Story
                </Button>
              }
              excerpt={post.excerpt.rendered}
              featuredImage={getFeaturedImageUrl(post)}
              title={post.title.rendered}
            />
          </PageContainer>
        )}
      </Box>

      <FeedbackForm />
    </main>
  );
}
