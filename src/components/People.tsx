import { getPeople } from '@/services';
import { getFeaturedImageUrl } from '@/utils';
import { Post } from '@botspot/ui';
import { Grid } from '@mui/material';
import { FC } from 'react';

export const People: FC = async () => {
  const { data } = await getPeople();

  return (
    <Grid spacing={{ lg: 5, md: 3, xs: 2 }} xs={12} container>
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
};
