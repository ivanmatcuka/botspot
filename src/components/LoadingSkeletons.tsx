'use client';

import { Grid, Skeleton } from '@mui/material';
import { FC } from 'react';

type LoadingSkeletonsProps = {
  count?: number;
};
export const LoadingSkeletons: FC<LoadingSkeletonsProps> = ({ count = 12 }) => {
  return Array(count)
    .fill(null)
    .map((_, index) => (
      <Grid key={index} lg={4} md={6} xs={12} item>
        <Skeleton height={360} variant="rounded" />
      </Grid>
    ));
};
