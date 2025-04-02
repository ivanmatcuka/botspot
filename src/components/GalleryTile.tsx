import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

type GalleryTileProps = {
  imgUrl: string;
  alt?: string;
  bgColor?: string;
};
export const GalleryTile: FC<PropsWithChildren<GalleryTileProps>> = ({
  imgUrl,
  children,
  alt,
  bgColor = 'grey.100',
}) => (
  <Box bgcolor={bgColor} py={{ xs: 5, md: 10 }}>
    <Grid alignItems="center" maxWidth="xl" mx="auto" px={3} container>
      <Grid md={1} xs={0} />
      <Grid md={5} xs={12} item>
        <Image
          alt={alt ?? ''}
          className="rounded-xl"
          height={304}
          loading="lazy"
          quality={80}
          src={imgUrl}
          width={493}
        />
      </Grid>
      <Grid md={1} xs={0} />
      <Grid md={4} mt={{ xs: 2, md: 0 }} xs={12} item>
        {children}
      </Grid>
      <Grid md={1} xs={0} />
    </Grid>
  </Box>
);
