import { Box, Grid } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ThemedContainer } from '@/components/ThemedContainer';
import { getPage } from '@/service';
import { generatePageMetadata } from '@/utils';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('terms-and-conditions');
}

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
