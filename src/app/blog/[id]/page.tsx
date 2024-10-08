'use client';

import { getPost } from '@/services/blogService';

import { useEffect, useState } from 'react';
import { WP_REST_API_Posts } from 'wp-types';
import {
  Box,
  Container,
  Grid,
  Skeleton,
  styled,
  Typography,
} from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
  h2: {
    ...theme.typography.h3,
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
  },
  p: {
    ...theme.typography.body1,
    marginBottom: theme.spacing(6),

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3),
    },
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export default function Blog({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<WP_REST_API_Posts[number] | undefined>();

  useEffect(() => {
    if (!params.id) return;
    setLoading(true);
    getPost(+params.id)
      .then((data) => setPost(data))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) <Skeleton variant="rounded" height={360} />;
  if (!post?.content) return null;

  return (
    <StyledContainer maxWidth="xl">
      <Grid container xs={12} md={10} mx="auto">
        <Grid item xs={12} my={{ xs: 8, md: 15 }}>
          <Typography variant="h2" component="h1" mb={{ xs: 3, md: 4 }}>
            {post.title.rendered}
          </Typography>
          <Typography>{post.excerpt.protected}</Typography>
          <Box dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
