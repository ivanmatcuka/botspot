import { Button } from './Button';
import { Tile } from './Tile';

import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type JobProps = {
  id: number;
  title: string;
  excerpt: string;
};
export const Job: FC<JobProps> = ({ id, title, excerpt }) => (
  <Tile headline={title}>
    <Box
      alignItems="center"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
      rowGap={{ xs: 2, md: 0 }}
    >
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <Button href={`/about/careers/${id}`} variant="primary">
        <ArrowForwardIos />
      </Button>
    </Box>
  </Tile>
);
