import { Job } from '@/app/components/Job/Job';

import { FC } from 'react';
import { WP_REST_API_Posts } from 'wp-types';
import { Box, Grid } from '@mui/material';

type JobsProps = {
  data: WP_REST_API_Posts;
};
export const Jobs: FC<JobsProps> = ({ data }) => (
  <Box maxWidth="xl" mx="auto">
    <Grid container spacing={{ xs: 2, md: 3, lg: 5 }}>
      {data.map((post) => (
        <Grid item xs={12} key={post.id}>
          <Job
            id={post.id}
            title={post.title.rendered}
            excerpt={post.excerpt.rendered}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);
