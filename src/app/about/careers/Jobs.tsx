import { Box } from '@mui/material';
import { FC } from 'react';

import { Job } from '@/components/Job';
import { getJobs } from '@/service';

export const Jobs: FC = async () => {
  const { data } = await getJobs();

  return data.map(({ id, excerpt, title }) => (
    <Box display="flex" key={id}>
      <Job excerpt={excerpt.rendered} id={id} title={title.rendered} />
    </Box>
  ));
};
