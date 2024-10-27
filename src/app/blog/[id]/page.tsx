import { getPost } from '@/services/mainService';
import { ThemedContainer } from '@/app/ThemedContainer';

import { Box, Grid, Typography } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await getPost(+params.id);
  if (!post) return {};

  return {
    title: `${post.title.rendered} – botspot`,
  };
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(+params.id);
  if (!post) return notFound();

  return (
    <ThemedContainer maxWidth="xl">
      <Grid md={10} mx="auto" xs={12} container>
        <Grid my={{ xs: 8, md: 15 }} xs={12} item>
          <>
            <Typography component="h1" mb={{ xs: 3, md: 4 }} variant="h2">
              {post.title.rendered}
            </Typography>
            <Typography>{post.excerpt.protected}</Typography>
            <Box dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </>
        </Grid>
      </Grid>
    </ThemedContainer>
  );
}
