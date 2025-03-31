import { Box } from '@mui/material';
import { FC } from 'react';

import { Job } from '@/components/Job';
import { CustomPost } from '@/service';

type JobsProps = {
  data: CustomPost[];
};
export const Jobs: FC<JobsProps> = ({ data }) =>
  data.map(({ id, excerpt, title }) => (
    <Box display="flex" key={id}>
      <Job excerpt={excerpt.rendered} id={id} title={title.rendered} />
    </Box>
  ));
