import { Iframe } from '@/app/components/3dIframe/3dIframe';
import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { getAreaBySlug } from '@/app/service';
import { generatePageMetadata, getFeaturedImageUrl } from '@/app/utils';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

const AREA_SLUG = 'areas-custom';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('custom-solutions');
}

export default async function CustomSolutions() {
  const area = await getAreaBySlug(AREA_SLUG);
  const post = area?.acf?.post;
  const relatedImage = getFeaturedImageUrl(post ?? undefined);

  return (
    <main className="">
      <Banner
        headline="Custom Solutions"
        mediaBlockOptions={{
          assetUrl: '/img/areas/custom-solution/banner.png',
        }}
        sublineElement="Create bespoke solutions with our 3D scanners, offering accurate, customized models to fit your unique specifications."
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="We see unconventional 3D scanning requests as an opportunity to collaborate even closer with our clients."
          subline="Insight"
        />
      </PageContainer>

      <Tile headline="Custom Solutions">
        <Typography variant="body1">
          Achieve tailored results with our 3D scanning solutions, delivering
          precise and custom-fit models for your specific needs.
        </Typography>
      </Tile>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="Achieve tailored results with our 3D scanning solutions, delivering precise and custom-fit models for your specific needs."
          subline="Custom Solutions"
        />
      </PageContainer>

      <Tile headline="Scanning Animals for International Series">
        <Box height={360}>
          <Iframe src="https://sketchfab.com/models/7d89f65475664a0eabc39e3e7790cddf/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1" />
        </Box>
        <Typography my={2} variant="body1">
          Approached by the new historical epic series “Those About to Die”,
          botspot took on the challenge of 3D scanning a horse.
        </Typography>
        <Button href="/3d-academy" variant="primary">
          Read Article
        </Button>
      </Tile>
      <Tile headline="Large Objects">
        <Box height={360}>
          <Iframe src="https://sketchfab.com/models/26a4f03049d34c8f9e055c29a0ea7365/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1" />
        </Box>
        <Typography mt={2} variant="body1">
          Have a large or unusual item that needs scanning? We’ve got you
          covered. Our expert team specializes in handling special requests,
          ensuring precision and quality for even the most challenging projects.
          Our team will come to you, with all the equipment needed to create
          high-quality models.
        </Typography>
      </Tile>

      {post && (
        <GalleryTile imgUrl={relatedImage}>
          <SecondaryBlock
            headline={post.post_title}
            primaryCta={
              <Button href={`/3d-academy/${post.post_name}`} variant="primary">
                Read Full Story
              </Button>
            }
            sublineElement={post.post_title}
          />
        </GalleryTile>
      )}
    </main>
  );
}
