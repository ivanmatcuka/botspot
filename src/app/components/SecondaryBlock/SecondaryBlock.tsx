import { Box, Grid, Typography } from '@mui/material';
import { FC, isValidElement, ReactNode } from 'react';

type SecondaryBlockProps = {
  headline?: ReactNode;
  sublineElement?: ReactNode;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
};
export const SecondaryBlock: FC<SecondaryBlockProps> = ({
  headline,
  sublineElement,
  primaryCta,
  secondaryCta,
}) => (
  <Box>
    <Box textAlign={{ xs: 'center', md: 'left' }}>
      <Typography variant="h2">{headline}</Typography>
      {isValidElement(sublineElement) ? (
        sublineElement
      ) : (
        <Typography
          variant="body1"
          mb={{ xs: 3, sm: 2 }}
          mt={{ xs: 1, sm: 0.5 }}
          component="div"
          dangerouslySetInnerHTML={{ __html: sublineElement ?? '' }}
        />
      )}
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
