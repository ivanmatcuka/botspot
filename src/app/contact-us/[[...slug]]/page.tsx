
import { Box, Grid } from '@mui/material';
import { Metadata } from 'next';

import { FeedbackForm } from '@/components/FeedbackForm';

export const metadata: Metadata = {
  title: 'CONTACT US – botspot',
};

export default async function ContactUs({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const slug = (await params).slug?.[0];
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
            <FeedbackForm defaultTopic={slug} frameless />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
