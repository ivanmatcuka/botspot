import { Container, Grid, GridProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type PageContainerProps = {
  banner?: boolean;
} & Pick<GridProps, 'mb' | 'mt' | 'mx' | 'my' | 'm'>;
export const PageContainer: FC<PropsWithChildren<PageContainerProps>> = ({
  banner = false,
  children,
  ...margins
}) => (
  <Container maxWidth="xl">
    <Grid
      container
      mx="auto"
      my={{ xs: 2, md: 3 }}
      mb={{ xs: 10, md: 20 }}
      xs={10}
      {...margins}
    >
      <Grid
        item
        xs={12}
        textAlign={{ xs: 'center', md: 'left' }}
        mx={banner ? undefined : 'auto'}
        md={banner ? 7 : undefined}
        xl={banner ? 6 : undefined}
        ml={banner ? 'auto' : undefined}
      >
        {children}
      </Grid>
    </Grid>
  </Container>
);
