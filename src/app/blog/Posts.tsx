'use client';

import { Button } from '@/app/components/Button/Button';
import { Pagination } from '@/app/components/Pagination/Pagination';
import { Post } from '@/app/components/Post/Post';
import { getFeaturedImageUrl } from '@/app/utils';
import { getPosts } from '@/services/mainService';

import { Grid, Skeleton } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useMemo, useState } from 'react';
import { WP_REST_API_Posts } from 'wp-types';

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

  const skeleton = useMemo(() => {
    return Array(6)
      .fill(null)
      .map((_, index) => (
        <Grid key={index} lg={4} md={6} xs={12} item>
          <Skeleton height={360} variant="rounded" />
        </Grid>
      ));
  }, []);

  return (
    <>
      {loading
        ? skeleton
        : posts.map((post) => (
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
                featuredImage={getFeaturedImageUrl(post)}
                title={post.title.rendered}
              />
            </Grid>
          ))}
      {!hidePagination && (
        <Grid mx="auto" xs={12} item>
          <Pagination
            count={Math.ceil(count / perPage)}
            perPage={perPage}
            setPage={setPage}
          />
        </Grid>
      )}
    </>
  );
};
