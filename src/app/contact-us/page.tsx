import { FeedbackForm } from '../components/FeedbackForm/FeedbackForm';

import { Box, Grid } from '@mui/material';

export default function ContactUs() {
  return (
    <main className="m-auto">
      <Box
        className="flex flex-1 items-center"
        maxWidth="xl"
        mt={6}
        mb={8}
        mx="auto"
        px={3}
      >
        <Grid container xs={12}>
          <Grid item xs={12} md={10} mx="auto">
            <FeedbackForm frameless />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
