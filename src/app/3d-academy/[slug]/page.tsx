import { Posts } from '../Posts';

import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { Button } from '@/components/Button';
import { LoadingSkeletons } from '@/components/LoadingSkeletons';
import { ThemedContainer } from '@/components/ThemedContainer';
import { getPostBySlug } from '@/services';
import { generateSeo, getFeaturedImageUrl } from '@/utils';

const baseUrl = process.env.NEXT_PUBLIC_URL;

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
  const featuredImage = post ? getFeaturedImageUrl(post) : null;

  if (!post) return notFound();

  return (
    <ThemedContainer maxWidth="xl">
      <Grid md={10} mx="auto" xs={12} container>
        <Grid my={{ xs: 8, md: 15 }} xs={12} item>
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
            mb={{ xs: 3, md: 4 }}
            variant="h1"
          />
          <Typography>{post.excerpt.protected}</Typography>
          <Box dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <Box
            className="flex gap-2 flex-col md:flex-row items-center"
            mt={{ xs: 5, md: 10 }}
          >
            <Button
              href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}/3d-academy/${slug}`}
              startIcon={<Facebook color="inherit" fontSize="small" />}
              target="_blank"
              variant="outline"
            >
              Share on Facebook
            </Button>
            <Button
              href={`https://twitter.com/share?url=${baseUrl}/3d-academy/${slug}`}
              startIcon={<Twitter color="inherit" fontSize="small" />}
              target="_blank"
              variant="outline"
            >
              Share on Twitter
            </Button>
            <Button
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}/3d-academy/${slug}`}
              startIcon={<LinkedIn color="inherit" fontSize="small" />}
              target="_blank"
              variant="outline"
            >
              Share on LinkedIn
            </Button>
          </Box>
          <Box pt={{ xs: 10, md: 15 }}>
            <hr />
            <Typography
              component="h2"
              mb={{ xs: 3, md: 6 }}
              mt={{ xs: 3, md: 10 }}
              variant="h2"
            >
              Related Articles:
            </Typography>

            <Suspense fallback={<LoadingSkeletons count={3} />}>
              <Posts perPage={3} hidePagination />
            </Suspense>
          </Box>
        </Grid>
      </Grid>
    </ThemedContainer>
  );
}
