import { Box, styled, Typography } from '@mui/material';
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

type MainBlockProps = {
  assetUrl?: string;
  headline?: string;
  subline?: string;
  cta?: ReactNode;
};
export const MainBlock: FC<MainBlockProps> = ({
  assetUrl,
  headline,
  subline,
  cta,
}) => {
  return (
    <StyledBox>
      {assetUrl && <StyledImage src={assetUrl} alt="" />}
      <Typography variant="body1" mb={2} mt={{ xs: 10, sm: 20 }}>
        {subline}
      </Typography>
      <Typography variant="h2" mb={4}>
        {headline}
      </Typography>
      {cta}
    </StyledBox>
  );
};
