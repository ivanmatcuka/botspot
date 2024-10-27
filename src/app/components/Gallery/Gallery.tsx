import { Grid } from '@mui/material';
import { FC, ReactNode } from 'react';

type GalleryProps = {
  firstChild?: ReactNode;
  secondChild?: ReactNode;
};
export const Gallery: FC<GalleryProps> = ({ firstChild, secondChild }) => (
  <Grid
    columnGap={{ xs: 0, md: 2 }}
    justifyContent="center"
    maxWidth="xl"
    mx="auto"
    px={3}
    rowGap={{ xs: 2, md: 0 }}
    container
  >
    <Grid
      bgcolor="grey.100"
      borderRadius={1}
      height={{ xs: 320, md: 420 }}
      md={5}
      overflow="hidden"
      xs={12}
      item
    >
      {firstChild}
    </Grid>
    <Grid
      bgcolor="grey.100"
      borderRadius={1}
      height={{ xs: 320, md: 420 }}
      md={5}
      overflow="hidden"
      xs={12}
      item
    >
      {secondChild}
    </Grid>
  </Grid>
);
