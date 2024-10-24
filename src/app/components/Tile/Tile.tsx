'use client';

import { Grid, Typography, Container } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type TileProps = {
  headline: string;
};

export const Tile: FC<PropsWithChildren<TileProps>> = ({
  headline,
  children,
}) => {
  return (
    <Container maxWidth="xl">
      <Grid
        xs={12}
        md={10}
        container
        pt={{ xs: 3, md: 6 }}
        mb={{ xs: 3, md: 6 }}
        mx="auto"
        textAlign={{ xs: 'center', md: 'left' }}
        className="border-t border-gray-700"
      >
        <Grid item xs={12} md={6} mt={0.5} pr={4}>
          <Typography variant="h4" mb={2}>
            {headline}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};
