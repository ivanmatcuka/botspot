import { Container, Grid, GridProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type PageContainerProps = {
  banner?: boolean;
} & Pick<GridProps, 'mb' | 'mt' | 'mx' | 'my' | 'm' | 'id'>;
export const PageContainer: FC<PropsWithChildren<PageContainerProps>> = ({
  banner = false,
  children,
  ...margins
}) => (
  <Container maxWidth="xl">
    <Grid
      mb={{ xs: 10, md: 20 }}
      mt={{ xs: 2, md: 3 }}
      mx="auto"
      xs={10}
      container
      {...margins}
    >
      <Grid
        md={banner ? 7 : undefined}
        ml={banner ? 'auto' : undefined}
        mx={banner ? undefined : 'auto'}
        textAlign={{ xs: 'center', md: 'left' }}
        xl={banner ? 6 : undefined}
        xs={12}
        item
      >
        {children}
      </Grid>
    </Grid>
  </Container>
);
