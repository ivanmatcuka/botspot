import { getJobs } from '@/services';
import { Job } from '@botspot/ui';
import { Box } from '@mui/material';
import { FC } from 'react';

export const Jobs: FC = async () => {
  const { data } = await getJobs();

  return data.map(({ excerpt, id, title }) => (
    <Box display="flex" key={id}>
      <Job excerpt={excerpt.rendered} id={id} title={title.rendered} />
    </Box>
  ));
};
