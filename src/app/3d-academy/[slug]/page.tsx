import { getPosts } from '@/actions/getPosts';
import { Posts, WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services/getPage';
import { getPostBySlug } from '@/services/getPostBySlug';
import { generateSeo } from '@/utils/generateSeo';
import { getFeaturedImageUrl } from '@/utils/getFeaturedImageUrl';
import {
  Box,
  LegacyPostContainer,
  LoadingSkeletons,
  PageContainer,
  Typography,
} from '@botspot/ui';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const result: Metadata = generateSeo(post) ?? {
    title: `${post.title.rendered} – botspot`,
  };

  return result;
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  const featuredImage = getFeaturedImageUrl(post ?? undefined);

  const page = await getPage('post-social-media');
  const blocks = page?.block_data;

  if (!post) return notFound();

  return (
    <LegacyPostContainer>
      <PageContainer>
        <Box
          maxWidth={{ md: '83%', xs: '100%' }}
          mx="auto"
          my={{ md: 15, xs: 8 }}
        >
          {featuredImage && (
            <Image
              alt={post.title.rendered}
              className="w-full h-auto max-h-[400px] object-cover xs:max-h-[200px] mb-10"
              height={300}
              loading="lazy"
              quality={80}
              src={featuredImage}
              width={1280}
            />
          )}
          <Typography
            dangerouslySetInnerHTML={{ __html: post.title.rendered ?? '' }}
            mb={{ md: 4, xs: 3 }}
            variant="h1"
          />
          <Typography>{post.excerpt.protected}</Typography>
          <Box
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            mb={{ md: 10, xs: 5 }}
          />
        </Box>
      </PageContainer>

      <PageContainer>
        <Box
          className="flex gap-2 flex-col md:flex-row items-center"
          maxWidth={{ md: '83%', xs: '100%' }}
          mx="auto"
        >
          {blocks && <WPBlocks blocks={blocks} />}
        </Box>
      </PageContainer>

      <PageContainer>
        <Box
          maxWidth={{ md: '83%', xs: '100%' }}
          mx="auto"
          my={{ md: 15, xs: 8 }}
        >
          <hr />
          <Typography
            component="h2"
            mb={{ md: 6, xs: 3 }}
            mt={{ md: 10, xs: 3 }}
            variant="h2"
          >
            Related Articles:
          </Typography>

          <Suspense fallback={<LoadingSkeletons count={3} />}>
            <Posts getPosts={getPosts} perPage={3} hidePagination />
          </Suspense>
        </Box>
      </PageContainer>
    </LegacyPostContainer>
  );
}
