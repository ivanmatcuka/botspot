import { Post } from '@/app/components/Post/Post';

import { FC } from 'react';
import { WP_REST_API_Attachment, WP_REST_API_Posts } from 'wp-types';
import { Box, Grid } from '@mui/material';

type PeopleProps = {
  data: WP_REST_API_Posts;
};
export const People: FC<PeopleProps> = ({ data }) => (
  <Box maxWidth="xl" className="w-full flex justify-center" mx="auto">
    <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} xs={10}>
      {data.map((post) => {
        const featuredImage =
          (post._embedded?.['wp:featuredmedia']?.[0] as WP_REST_API_Attachment)
            ?.source_url ?? '/3d_object.png';

        return (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <Post
              title={post.title.rendered}
              excerpt={post.excerpt.rendered}
              featuredImage={featuredImage}
            />
          </Grid>
        );
      })}
    </Grid>
  </Box>
);
