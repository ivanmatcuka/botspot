'use client';

import { Box, Container, Grid, styled, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

type MainBlockProps = {
  assetUrl?: string;
  headline?: string;
  subline?: string;
  cta?: ReactNode;
  subAssetUrl?: string;
};
export const MainBlock: FC<MainBlockProps> = ({
  assetUrl,
  headline,
  subline,
  cta,
  subAssetUrl,
}) => {
  return (
    <Box textAlign={{ xs: 'center', md: 'left' }}>
      {assetUrl && <StyledImage src={assetUrl} alt="" />}

      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="center"
          my={{ xs: 10, md: 20 }}
          direction="column"
        >
          <Grid item xs={12} textAlign={{ xs: 'center', md: 'left' }}>
            <Typography variant="body1" mb={2}>
              {subline}
            </Typography>
            <Typography variant="h2" mb={4}>
              {headline}
            </Typography>
            {cta}
          </Grid>
          {subAssetUrl && (
            <Grid
              item
              flex={1}
              mt={6}
              maxHeight={{ xs: 800, md: 768, lg: 1024 }}
            >
              <Image
                src={subAssetUrl}
                width={800}
                height={800}
                alt=""
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};
