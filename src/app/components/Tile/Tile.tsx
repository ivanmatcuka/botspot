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
        pt={6}
        mb={6}
        mx="auto"
        textAlign={{ xs: 'center', md: 'left' }}
        columnSpacing={4}
        className="border-t border-gray-700"
      >
        <Grid item flexBasis={{ xs: '100%', md: '50%' }}>
          <Typography variant="h4" mb={2}>
            {headline}
          </Typography>
        </Grid>
        <Grid item flexBasis={{ xs: '100%', md: '50%' }}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};
