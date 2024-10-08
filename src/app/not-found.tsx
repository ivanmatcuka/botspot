'use client';

import { Box, Typography } from '@mui/material';
import { Button } from './components/Button/Button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const { push } = useRouter();

  return (
    <Box
      mx="auto"
      display="flex"
      flex={1}
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      maxWidth="xl"
      height="100%"
    >
      <Typography variant="h1" fontWeight={600}>
        404
      </Typography>
      <Typography variant="body1" mt={3} mb={8}>
        Page not Found
      </Typography>
      <Button variant="primary" onClick={() => push('/')}>
        Go Home
      </Button>
    </Box>
  );
}
