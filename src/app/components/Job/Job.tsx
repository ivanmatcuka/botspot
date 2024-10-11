import { Tile } from '../Tile/Tile';
import { Button } from '../Button/Button';

import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

type JobProps = {
  id: number;
  title: string;
  excerpt: string;
};
export const Job: FC<JobProps> = ({ id, title, excerpt }) => (
  <Tile headline={title}>
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      rowGap={{ xs: 2, md: 0 }}
    >
      <Typography dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Link href={`/blog/${id}`}>
        <Button variant="primary">
          <ArrowForwardIos />
        </Button>
      </Link>
    </Box>
  </Tile>
);
