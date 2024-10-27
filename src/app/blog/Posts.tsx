'use client';

import { Pagination } from '@/app/components/Pagination/Pagination';
import { Button } from '@/app/components/Button/Button';
import { Post } from '@/app/components/Post/Post';
import { getPosts } from '@/services/mainService';

import { FC, useEffect, useState } from 'react';
import { WP_REST_API_Attachment, WP_REST_API_Posts } from 'wp-types';
import { Box, Grid, Skeleton } from '@mui/material';
import { useRouter } from 'next/navigation';

type PostProps = {
  perPage?: number;
  hidePagination?: boolean;
  list?: boolean;
};
export const Posts: FC<PostProps> = ({
  perPage = 12,
  hidePagination = false,
  list = false,
}) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<WP_REST_API_Posts>([]);
  const { push } = useRouter();

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
    <Box className="w-full flex justify-center" maxWidth="xl" mx="auto">
      <Grid spacing={{ xs: 2, md: 3, lg: 5 }} xs={10} container>
        {loading
          ? Array(6)
              .fill(null)
              .map((_, index) => (
                <Grid key={index} lg={4} md={6} xs={12} item>
                  <Skeleton height={360} variant="rounded" />
                </Grid>
              ))
          : posts.map((post) => {
              const featuredImage =
                (
                  post._embedded?.[
                    'wp:featuredmedia'
                  ]?.[0] as WP_REST_API_Attachment
                )?.source_url ?? '/img/banners/innovation-lab.png';

              return (
                <Grid
                  key={post.id}
                  lg={list ? 12 : 4}
                  md={list ? 12 : 6}
                  xs={12}
                  item
                >
                  <Post
                    cta={
                      <Button
                        variant="secondary"
                        onClick={() => push(`/blog/${post.id}`)}
                      >
                        Read Full Story
                      </Button>
                    }
                    excerpt={post.excerpt.rendered}
                    featuredImage={featuredImage}
                    title={post.title.rendered}
                  />
                </Grid>
              );
            })}
        {!hidePagination && (
          <Grid mx="auto" xs={12} item>
            <Pagination
              count={Math.ceil(count / perPage)}
              perPage={perPage}
              setPage={setPage}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
