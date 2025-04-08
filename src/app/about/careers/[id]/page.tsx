import { getPost } from '@/services';
import { generateSeo } from '@/utils';
import { ThemedContainer } from '@botspot/ui';
import { Box, Grid, Typography } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ExtraFooter } from '../../../../components/ExtraFooter';

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
          <Grid my={{ md: 15, xs: 8 }} xs={12} item>
            <>
              <Typography component="span" variant="body1">
                Open Positions
              </Typography>
              <Typography
                component="h1"
                mb={{ md: 4, xs: 3 }}
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
