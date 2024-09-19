'use client';

import { Grid, styled, Typography, Container } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type TileProps = {
  headline: string;
};

const GridContainer = styled(Grid)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[700]}`,
}));

export const Tile: FC<PropsWithChildren<TileProps>> = ({
  headline,
  children,
}) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <GridContainer
        container
        pt={6}
        xs={10}
        xl={12}
        mb={6}
        mx="auto"
        textAlign={{ xs: 'center', md: 'left' }}
        columnSpacing={2}
      >
        <Grid item flexBasis={{ xs: '100%', md: '50%' }}>
          <Typography variant="h4" mb={2}>
            {headline}
          </Typography>
        </Grid>
        <Grid item flexBasis={{ xs: '100%', md: '50%' }}>
          {children}
        </Grid>
      </GridContainer>
    </Container>
  );
};
