'use client';

import { Grid, styled, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type TileProps = {
  headline: string;
};

const Container = styled(Grid)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[700]}`,
}));

export const Tile: FC<PropsWithChildren<TileProps>> = ({
  headline,
  children,
}) => {
  return (
    <Container
      container
      pt={6}
      xs={10}
      mb={6}
      mx="auto"
      textAlign={{ xs: 'center', sm: 'left' }}
    >
      <Grid item flexBasis={{ xs: '100%', sm: '50%' }}>
        <Typography variant="h4">{headline}</Typography>
      </Grid>
      <Grid item flexBasis={{ xs: '100%', sm: '50%' }}>
        {children}
      </Grid>
    </Container>
  );
};
