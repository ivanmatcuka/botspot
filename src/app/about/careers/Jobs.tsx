import { Job } from '@/components/Job';
import { CustomPost } from '@/service';

import { Grid } from '@mui/material';
import { FC } from 'react';

type JobsProps = {
  data: CustomPost[];
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
