import { Button } from './components/Button/Button';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
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

      <Link href="/">
        <Button variant="primary">Go Home</Button>
      </Link>
    </Box>
  );
}
