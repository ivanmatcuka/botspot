import { Grid2, styled, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type TileProps = {
  headline: string;
};

const Container = styled(Grid2)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[700]}`,
}));

export const Tile: FC<PropsWithChildren<TileProps>> = ({
  headline,
  children,
}) => {
  return (
    <Container container pt={6}>
      <Grid2 flexBasis="50%">
        <Typography variant="h4">{headline}</Typography>
      </Grid2>
      <Grid2 flexBasis="50%">{children}</Grid2>
    </Container>
  );
};
