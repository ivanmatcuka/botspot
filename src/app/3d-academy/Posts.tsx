'use client';

import { Button, LoadingSkeletons, Pagination, Post } from '@botspot/ui';
import { Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { CustomPost, getPosts } from '@/service';
import { getFeaturedImageUrl } from '@/utils';

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

  return (
    <Grid spacing={{ xs: 2, md: 3, lg: 5 }} xs={10} container>
      {loading ? (
        <LoadingSkeletons count={perPage} />
      ) : (
        posts.map((post) => (
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
                  href={`/3d-academy/${post.slug}`}
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
        ))
      )}
      {!hidePagination && (
        <Grid mx="auto" xs={12} item>
          <Pagination count={count} perPage={perPage} setPage={setPage} />
        </Grid>
      )}
    </Grid>
  );
};
