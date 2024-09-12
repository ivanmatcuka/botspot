import { Box, Grid2, styled, Typography } from '@mui/material';
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
      <Typography variant="h2" mt={{ xs: 2, sm: 3 }}>
        {headline}
      </Typography>
      <Typography variant="body1" mb={{ xs: 3, sm: 2 }} mt={{ xs: 1, sm: 0.5 }}>
        {subline}
      </Typography>
      <Box display="flex">
        <Grid2 container spacing={2}>
          <Grid2>{primaryCta}</Grid2>
          <Grid2>{secondaryCta}</Grid2>
        </Grid2>
      </Box>
    </StyledBox>
  );
};
