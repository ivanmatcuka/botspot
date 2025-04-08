'use client';

import { CustomPost, getPosts } from '@/services';
import { getFeaturedImageUrl } from '@/utils';
import { LoadingSkeletons, Pagination, Post } from '@botspot/ui';
import { Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { Button } from './NextButton/NextButton';

type PostProps = {
  hidePagination?: boolean;
  list?: boolean;
  perPage?: number;
};
export const Posts: FC<PostProps> = ({
  hidePagination = false,
  list = false,
  perPage = 12,
}) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<CustomPost[]>([]);

  useEffect(() => {
    setLoading(true);
    getPosts(page, perPage)
      .then(({ count, data }) => {
        setPosts(data);
        setCount(count);
      })
      .finally(() => setLoading(false));
  }, [page, perPage]);

  return (
    <Grid spacing={{ lg: 5, md: 3, xs: 2 }} xs={10} container>
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
