import { Box, Grid } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

type GalleryTileProps = {
  imgUrl: string;
  alt?: string;
};
export const GalleryTile: FC<PropsWithChildren<GalleryTileProps>> = ({
  imgUrl,
  children,
  alt,
}) => (
  <Box bgcolor="grey.100" py={{ xs: 5, md: 10 }}>
    <Grid container alignItems="center" mx="auto" maxWidth="xl" px={3}>
      <Grid xs={0} md={1} />
      <Grid item xs={12} md={5}>
        <Image
          src={imgUrl}
          width={493}
          height={304}
          alt={alt ?? ''}
          quality={100}
        />
      </Grid>
      <Grid xs={0} md={1} />
      <Grid item xs={12} md={4}>
        {children}
      </Grid>
      <Grid xs={0} md={1} />
    </Grid>
  </Box>
);
