import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';
import { ThemedContainer } from '@botspot/ui';
import { notFound } from 'next/navigation';

export default async function LegalNotice() {
  const page = await getPage('legal-notice');
  if (!page) return notFound();

  const blocks = page.block_data;

  return (
    <main className="">
      {blocks && (
        <ThemedContainer>
          <WPBlocks blocks={blocks} />
        </ThemedContainer>
      )}
    </main>
  );
}
