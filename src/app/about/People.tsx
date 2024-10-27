import { Post } from '@/app/components/Post/Post';

import { FC } from 'react';
import { WP_REST_API_Attachment, WP_REST_API_Posts } from 'wp-types';
import { Grid } from '@mui/material';

type PeopleProps = {
  data: WP_REST_API_Posts;
};
export const People: FC<PeopleProps> = ({ data }) => (
  <Grid spacing={{ xs: 2, md: 3, lg: 5 }} xs={12} container>
    {data.map((post) => {
      const featuredImage =
        (post._embedded?.['wp:featuredmedia']?.[0] as WP_REST_API_Attachment)
          ?.source_url ?? '/img/banners/innovation-lab.png';

      return (
        <Grid key={post.id} lg={4} md={6} xs={12} item>
          <Post
            excerpt={post.excerpt.rendered}
            featuredImage={featuredImage}
            title={post.title.rendered}
          />
        </Grid>
      );
    })}
  </Grid>
);
