import { ThemedContainer } from '@/app/components/ThemedContainer';
import { getPage } from '@/app/service';
import { generatePageMetadata } from '@/app/utils';

import { Box, Grid } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('privacy-policy');
}

export default async function PrivacyPolicy() {
  const page = await getPage('privacy-policy');

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
