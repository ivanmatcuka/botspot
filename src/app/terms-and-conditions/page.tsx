import { ThemedContainer } from '@/app/components/ThemedContainer';
import { getPage } from '@/app/service';

import { Box, Grid } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'TERMS AND CONDITIONS – botspot',
};

export default async function TermsAndConditions() {
  const page = await getPage('terms-and-conditions');

  if (!page) return notFound();

  return (
    <main className="">
      <ThemedContainer maxWidth="xl">
        <Grid md={10} mx="auto" xs={12} container>
          <Grid my={{ xs: 8, md: 15 }} xs={12} item>
            <Box
              dangerouslySetInnerHTML={{ __html: page?.content.rendered ?? '' }}
            />
          </Grid>
        </Grid>
      </ThemedContainer>
    </main>
  );
}
