'use client';

import { Button } from '@/app/components/Button/Button';
import { Pagination } from '@/app/components/Pagination';
import { Post } from '@/app/components/Post';
import { CustomPost, getPosts } from '@/app/service';
import { getFeaturedImageUrl } from '@/app/utils';

import { Grid, Skeleton } from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';

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
  const [posts, setPosts] = useState<CustomPost[]>([]);

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
    return Array(perPage)
      .fill(null)
      .map((_, index) => (
        <Grid key={index} lg={4} md={6} xs={12} item>
          <Skeleton height={360} variant="rounded" />
        </Grid>
      ));
  }, [perPage]);

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
                    href={`/${post.slug}`}
                    target="_blank"
                    variant="secondary"
                  >
                    Read Full Article
                  </Button>
                }
                featuredImage={getFeaturedImageUrl(post)}
                title={post.title.rendered}
              />
            </Grid>
          ))}
      {!hidePagination && (
        <Grid mx="auto" xs={12} item>
          <Pagination count={count} perPage={perPage} setPage={setPage} />
        </Grid>
      )}
    </>
  );
};
