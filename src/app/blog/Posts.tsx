'use client';

import { FC, useEffect, useState } from 'react';
import { getPosts } from '@/services/blogService';
import { WP_REST_API_Attachment, WP_REST_API_Posts } from 'wp-types';
import { Box, Grid, Skeleton } from '@mui/material';
import { Post } from '@/app/components/Post/Post';
import { Pagination } from '../components/Pagination/Pagination';

type PostProps = {
  perPage?: number;
  hidePagination?: boolean;
};
export const Posts: FC<PostProps> = ({
  perPage = 12,
  hidePagination = false,
}) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<WP_REST_API_Posts>([]);

  useEffect(() => {
    setLoading(true);
    getPosts(page, perPage)
      .then(({ data, count }) => {
        setPosts(data);
        setCount(count);
      })
      .finally(() => setLoading(false));
  }, [page, perPage]);

  return (
    <Box maxWidth="xl" className="w-full flex justify-center" mx="auto">
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
                    link={post.link}
                    excerpt={post.excerpt.rendered}
                    featuredImage={featuredImage}
                  />
                </Grid>
              );
            })}
        {!hidePagination && (
          <Grid xs={12} mx="auto" item>
            <Pagination
              count={Math.ceil(count / perPage)}
              setPage={setPage}
              perPage={perPage}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
