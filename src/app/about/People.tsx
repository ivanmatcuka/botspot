import { Post } from '@/app/components/Post';
import { CustomPost } from '@/app/service';
import { getFeaturedImageUrl } from '@/app/utils';

import { Grid } from '@mui/material';
import { FC } from 'react';

type PeopleProps = {
  data: CustomPost[];
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
