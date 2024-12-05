import { Posts } from '../Posts';

import { Button } from '@/app/components/Button/Button';
import { ThemedContainer } from '@/app/components/ThemedContainer';
import { getPost } from '@/app/service';

import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

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
            <Box
              className="flex gap-2 flex-col md:flex-row items-center"
              mt={{ xs: 5, md: 10 }}
            >
              <Button
                href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}blog/${params.id}`}
                startIcon={<Facebook color="inherit" fontSize="small" />}
                target="_blank"
                variant="outline"
              >
                Share on Facebook
              </Button>
              <Button
                href={`https://twitter.com/share?url=${baseUrl}blog/${params.id}`}
                startIcon={<Twitter color="inherit" fontSize="small" />}
                target="_blank"
                variant="outline"
              >
                Share on Twitter
              </Button>
              <Button
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${baseUrl}blog/${params.id}`}
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
              <Grid spacing={{ xs: 2, md: 3, lg: 5 }} container>
                <Posts perPage={3} hidePagination />
              </Grid>
            </Box>
          </>
        </Grid>
      </Grid>
    </ThemedContainer>
  );
}
