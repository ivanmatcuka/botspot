import { getPage } from '@/services';
import { PageContainer, ThemedContainer } from '@botspot/ui';
import { notFound } from 'next/navigation';

export default async function Components() {
  const page = await getPage('components');

  if (!page?.content) return notFound();

  return (
    <main className="">
      <PageContainer mb={8} mt={{ md: 15, xs: 10 }}>
        <ThemedContainer
          dangerouslySetInnerHTML={{ __html: page?.content.rendered ?? '' }}
        />
      </PageContainer>
    </main>
  );
}
