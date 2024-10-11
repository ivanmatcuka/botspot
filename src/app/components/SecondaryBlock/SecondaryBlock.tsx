import {
  MediaBlock,
  MediaBlockProps,
} from '@/app/components/MediaBlock/MediaBlock';

import { Box, Grid, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type SecondaryBlockProps = {
  headline?: string;
  subline?: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
};
export const SecondaryBlock: FC<SecondaryBlockProps> = ({
  headline,
  subline,
  primaryCta,
  secondaryCta,
}) => (
  <Box>
    <Box textAlign={{ xs: 'center', md: 'left' }}>
      <Typography variant="h2">{headline}</Typography>
      <Typography variant="body1" mb={{ xs: 3, sm: 2 }} mt={{ xs: 1, sm: 0.5 }}>
        {subline}
      </Typography>
      {(primaryCta || secondaryCta) && (
        <Box display="flex">
          <Grid
            container
            spacing={2}
            justifyContent={{ xs: 'center', md: 'left' }}
          >
            {primaryCta && <Grid item>{primaryCta}</Grid>}
            {secondaryCta && <Grid item>{secondaryCta}</Grid>}
          </Grid>
        </Box>
      )}
    </Box>
  </Box>
);
