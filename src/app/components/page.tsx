import { PageContainer, ThemedContainer } from '@botspot/ui';
import { notFound } from 'next/navigation';

import { getPage } from '@/service';

export default async function Components() {
  const page = await getPage('components');

  if (!page?.content) return notFound();

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
