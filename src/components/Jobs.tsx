'use client';

import { CustomPost, getJobs } from '@/services';
import { Job } from '@botspot/ui';
import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';

export const Jobs: FC = () => {
  const [people, setJobs] = useState<CustomPost[]>([]);

  useEffect(() => {
    getJobs().then(({ data }) => {
      setJobs(data);
    });
  }, []);

  return people.map(({ excerpt, id, title }) => (
    <Box display="flex" key={id}>
      <Job excerpt={excerpt.rendered} id={id} title={title.rendered} />
    </Box>
  ));
};
