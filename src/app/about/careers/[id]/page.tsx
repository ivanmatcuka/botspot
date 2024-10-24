import { ExtraFooter } from '../ExtraFooter';

import { getPost } from '@/services/mainService';
import { ThemedContainer } from '@/app/ThemedContainer';

import { Box, Grid, Typography } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const job = await getPost(+params.id);
  if (!job) return {};

  return {
    title: `${job.title.rendered} – botspot`,
  };
}

export default async function Job({ params }: { params: { id: string } }) {
  const job = await getPost(+params.id);
  if (!job) return notFound();

  return (
    <main className="flex flex-col flex-1">
      <ThemedContainer maxWidth="xl">
        <Grid container xs={12} md={10} mx="auto">
          <Grid item xs={12} my={{ xs: 8, md: 15 }}>
            <>
              <Typography variant="body1" component="span">
                Open Positions
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                mt={2}
                mb={{ xs: 3, md: 4 }}
              >
                {job.title.rendered}
              </Typography>
              <Typography>{job.excerpt.protected}</Typography>
              <Box dangerouslySetInnerHTML={{ __html: job.content.rendered }} />
            </>
          </Grid>
        </Grid>
      </ThemedContainer>

      <ExtraFooter />
    </main>
  );
}
