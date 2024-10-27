import { Job } from '@/app/components/Job/Job';

import { FC } from 'react';
import { WP_REST_API_Posts } from 'wp-types';
import { Box, Grid } from '@mui/material';

type JobsProps = {
  data: WP_REST_API_Posts;
};
export const Jobs: FC<JobsProps> = ({ data }) => (
  <Box maxWidth="xl" mx="auto">
    <Grid spacing={{ xs: 2, md: 3, lg: 5 }} container>
      {data.map((post) => (
        <Grid key={post.id} xs={12} item>
          <Job
            excerpt={post.excerpt.rendered}
            id={post.id}
            title={post.title.rendered}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);
