'use client';

import { Box, Container, Grid } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

type GalleryTileProps = {
  imgUrl: string;
};
export const GalleryTile: FC<PropsWithChildren<GalleryTileProps>> = ({
  imgUrl,
  children,
}) => {
  return (
    <Box
      width="100%"
      bgcolor="grey.100"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={{ xs: 5, md: 10 }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Image
              src={imgUrl}
              width={493}
              height={304}
              alt="Custom Solutions"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
