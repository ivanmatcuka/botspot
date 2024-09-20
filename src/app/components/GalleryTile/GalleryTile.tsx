'use client';

import { Box, Container, Grid, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

export const WrapperBox = styled(Box)(({ theme }) => ({
  '.secondary-block': {
    marginBottom: 0,
  },
}));

type GalleryTileProps = {
  imgUrl: string;
  alt?: string;
};
export const GalleryTile: FC<PropsWithChildren<GalleryTileProps>> = ({
  imgUrl,
  children,
  alt,
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
            <Image src={imgUrl} width={493} height={304} alt={alt ?? ''} />
          </Grid>
          <Grid item xs={12} md={6}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
