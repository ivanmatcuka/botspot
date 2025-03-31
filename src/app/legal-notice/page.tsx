import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageContainer } from '@/components/PageContainer';
import { ThemedContainer } from '@/components/ThemedContainer';
import { getPage } from '@/service';
import { generatePageMetadata } from '@/utils';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('legal-notice');
}

export default async function LegalNotice() {
  const page = await getPage('legal-notice');

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
