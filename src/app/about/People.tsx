'use client';

import { FC, useEffect, useState } from 'react';
import { getPeople } from '@/services/blogService';
import { WP_REST_API_Attachment, WP_REST_API_Posts } from 'wp-types';
import { Box, Grid, Skeleton } from '@mui/material';
import { Post } from '@/app/components/Post/Post';

export const People: FC = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<WP_REST_API_Posts>([]);

  useEffect(() => {
    setLoading(true);
    getPeople()
      .then(({ data }) => {
        setPosts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box maxWidth="xl" className="w-full flex justify-center" mx="auto" p={3}>
      <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} xs={10}>
        {loading
          ? Array(6)
              .fill(null)
              .map((_, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Skeleton variant="rounded" height={360} />
                </Grid>
              ))
          : posts.map((post) => {
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
                    excerpt={post.excerpt.rendered}
                    featuredImage={featuredImage}
                  />
                </Grid>
              );
            })}
      </Grid>
    </Box>
  );
};
