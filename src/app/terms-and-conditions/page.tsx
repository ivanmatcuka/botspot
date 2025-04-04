import { ThemedContainer } from '@botspot/ui';
import { notFound } from 'next/navigation';
import { PageContainer } from '@botspot/ui';

import { getPage } from '@/service';

export default async function TermsAndConditions() {
  const page = await getPage('terms-and-conditions');

  if (!page) return notFound();

  return (
    <main className="">
      <PageContainer mb={8} mt={{ xs: 10, md: 15 }}>
        <ThemedContainer
          dangerouslySetInnerHTML={{ __html: page?.content.rendered ?? '' }}
        />
      </PageContainer>
    </main>
  );
}
