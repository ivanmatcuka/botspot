import { ExtraFooter } from '../ExtraFooter';

import { ThemedContainer } from '@/app/components/ThemedContainer';
import { getPost } from '@/app/service';
import { generateSeo } from '@/app/utils';

import { Box, Grid, Typography } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;
  const job = await getPost(+id);
  if (!job) return {};

  return (
    generateSeo(job) ?? {
      title: `${job.title.rendered} – botspot`,
    }
  );
}

export default async function Job({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const job = await getPost(+id);

  if (!job) return notFound();

  return (
    <main className="flex flex-col flex-1">
      <ThemedContainer maxWidth="xl">
        <Grid md={10} mx="auto" xs={12} container>
          <Grid my={{ xs: 8, md: 15 }} xs={12} item>
            <>
              <Typography component="span" variant="body1">
                Open Positions
              </Typography>
              <Typography
                component="h1"
                mb={{ xs: 3, md: 4 }}
                mt={2}
                variant="h2"
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
