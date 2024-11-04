import { Job } from '@/app/components/Job/Job';

import { Grid } from '@mui/material';
import { FC } from 'react';
import { WP_REST_API_Posts } from 'wp-types';

type JobsProps = {
  data: WP_REST_API_Posts;
};
export const Jobs: FC<JobsProps> = ({ data }) =>
  data.map((post) => (
    <Grid key={post.id} xs={12} item>
      <Job
        excerpt={post.excerpt.rendered}
        id={post.id}
        title={post.title.rendered}
      />
    </Grid>
  ));
