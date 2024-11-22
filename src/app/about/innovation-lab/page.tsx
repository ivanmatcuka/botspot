import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { Post } from '@/app/components/Post';
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
      <Banner
        headline="Innovation Lab"
        mediaBlockOptions={{
          assetUrl: '/img/banners/innovation-lab.png',
        }}
        primaryCta={
          <Button href="/contact-us" variant="primary">
            Contact Innovation Lab
          </Button>
        }
        secondaryCta={
          <Button href="/blog" variant="secondary">
            Visit 3D Academy
          </Button>
        }
        sublineElement="Our Innovation Lab operates as an interface between research and industrial production, assessing Custom Solutions and Special Requests."
      />

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
      <Tile headline="Custom Solutions & Special Requests">
        <Typography variant="body1">
          Our custom solutions are designed to meet your unique needs. We work
          closely with you to create tailored strategies, delivering
          personalized and effective results.
        </Typography>
      </Tile>
      <Tile headline="3D Scans of Reflective Surfaces">
        <Typography variant="body1">
          Glossy and transparent surfaces tend to create issues, resulting in
          defective 3D models. Our Innovation Lab has developed methods to
          create highly precise 3D models of objects from glass and other
          challenging materials, mainly employing photogrammetry.
        </Typography>
      </Tile>

      <Box bgcolor="grey.100" overflow="auto" py={{ xs: 5, md: 10 }}>
        <PageContainer mb={5} mt={0}>
          <MainBlock
            cta={
              <Button href="/blog" variant="primary">
                Visit 3D Academy
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
