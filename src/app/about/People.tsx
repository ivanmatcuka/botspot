import { getFeaturedImageUrl } from '../utils';

import { Post } from '@/app/components/Post/Post';

import { Grid } from '@mui/material';
import { FC } from 'react';
import { WP_REST_API_Posts } from 'wp-types';

type PeopleProps = {
  data: WP_REST_API_Posts;
};
export const People: FC<PeopleProps> = ({ data }) => (
  <Grid spacing={{ xs: 2, md: 3, lg: 5 }} xs={12} container>
    {data.map((post) => (
      <Grid key={post.id} lg={4} md={6} xs={12} item>
        <Post
          excerpt={post.excerpt.rendered}
          featuredImage={getFeaturedImageUrl(post)}
          title={post.title.rendered}
        />
      </Grid>
    ))}
  </Grid>
);
