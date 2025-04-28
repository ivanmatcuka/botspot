import { WPBlocks } from '@/components/WPBlocks';
import { getPost } from '@/services/getPost';
import { generateSeo } from '@/utils/generateSeo';
import {
  Grid,
  LegacyPostContainer,
  PageContainer,
  Typography,
} from '@botspot/ui';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { JobsFooter } from '../../../../components/JobsFooter';

const DEFAULT_META = {
  title: 'botspot – Job Page',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;
  const job = await getPost(+id);

  if (!job) return DEFAULT_META;

  return generateSeo(job) ?? DEFAULT_META;
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
    <main className="">
      <PageContainer>
        <LegacyPostContainer className="flex flex-col flex-1">
          <Grid mx="auto" px={2} xs={12} container>
            <Grid my={{ md: 15, xs: 8 }} xs={12} item>
              <>
                <Typography
                  component="h1"
                  mb={{ md: 4, xs: 3 }}
                  mt={2}
                  variant="h2"
                >
                  {job.title.rendered}
                </Typography>
                <Typography>{job.excerpt.protected}</Typography>
                {job.block_data && <WPBlocks blocks={job.block_data} />}
              </>
            </Grid>
          </Grid>
        </LegacyPostContainer>
      </PageContainer>

      <JobsFooter />
    </main>
  );
}
