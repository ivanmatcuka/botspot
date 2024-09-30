import { Grid } from '@mui/material';
import { FC, ReactNode } from 'react';

type GalleryProps = {
  firstChild?: ReactNode;
  secondChild?: ReactNode;
};
export const Gallery: FC<GalleryProps> = ({ firstChild, secondChild }) => (
  <Grid
    container
    maxWidth="xl"
    mx="auto"
    justifyContent="center"
    columnGap={{ xs: 0, md: 2 }}
    rowGap={{ xs: 2, md: 0 }}
    px={3}
  >
    <Grid
      item
      xs={12}
      md={5}
      height={{ xs: 320, md: 420 }}
      bgcolor="grey.100"
      borderRadius={1}
    >
      {firstChild}
    </Grid>
    <Grid
      item
      xs={12}
      md={5}
      height={{ xs: 320, md: 420 }}
      bgcolor="grey.100"
      borderRadius={1}
    >
      {secondChild}
    </Grid>
  </Grid>
);
