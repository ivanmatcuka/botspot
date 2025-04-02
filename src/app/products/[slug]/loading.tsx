import { Skeleton } from '@mui/material';

export default function Loading() {
  return (
    <Skeleton
      height="auto"
      sx={{ flex: 1 }}
      variant="rectangular"
      width="100%"
    />
  );
}
