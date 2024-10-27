import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';

import { Metadata } from 'next';
import { Box, Grid } from '@mui/material';

export const metadata: Metadata = {
  title: 'CONTACT US – botspot',
};

export default function ContactUs() {
  return (
    <main className="m-auto">
      <Box
        className="flex flex-1 items-center"
        maxWidth="xl"
        mb={8}
        mt={6}
        mx="auto"
        px={3}
      >
        <Grid xs={12} container>
          <Grid md={10} mx="auto" xs={12} item>
            <FeedbackForm frameless />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
