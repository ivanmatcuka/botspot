'use client';

import { Box, Grid, styled, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',

  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
}));

type SecondaryBlockProps = {
  assetUrl?: string;
  headline?: string;
  subline?: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
};
export const SecondaryBlock: FC<SecondaryBlockProps> = ({
  assetUrl,
  headline,
  subline,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <StyledBox>
      {assetUrl && <StyledImage src={assetUrl} alt="" />}
      <Grid
        container
        justifyContent="center"
        mt={{ xs: 2, sm: 3 }}
        mb={{ xs: 10, sm: 15 }}
      >
        <Grid item xs={10}>
          <Typography variant="h2">{headline}</Typography>
          <Typography
            variant="body1"
            mb={{ xs: 3, sm: 2 }}
            mt={{ xs: 1, sm: 0.5 }}
          >
            {subline}
          </Typography>
          <Box display="flex">
            <Grid
              container
              spacing={2}
              justifyContent={{ xs: 'center', sm: 'left' }}
            >
              <Grid item>{primaryCta}</Grid>
              <Grid item>{secondaryCta}</Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </StyledBox>
  );
};
