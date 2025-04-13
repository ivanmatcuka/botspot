import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';
import { ThemedContainer } from '@botspot/ui';
import { notFound } from 'next/navigation';

export default async function PrivacyPolicy() {
  const page = await getPage('privacy');
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
