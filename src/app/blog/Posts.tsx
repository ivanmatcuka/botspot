'use client';

import { useEffect, useState } from 'react';
import { getPosts } from '@/services/blogService';
import { WP_REST_API_Attachment, WP_REST_API_Posts } from 'wp-types';
import { Container, Grid } from '@mui/material';
import { Post } from '@/app/components/Post/Post';

export const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<WP_REST_API_Posts>([]);

  useEffect(() => {
    setLoading(true);
    getPosts(page)
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, [page]);

  if (loading) return <div>Loading...</div>;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} mx="auto">
        {posts.map((post) => {
          const featuredImage =
            (
              post._embedded?.[
                'wp:featuredmedia'
              ]?.[0] as WP_REST_API_Attachment
            )?.source_url ?? '/3d_object.png';

          return (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <Post
                title={post.title.rendered}
                link={post.link}
                excerpt={post.excerpt.rendered}
                featuredImage={featuredImage}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
