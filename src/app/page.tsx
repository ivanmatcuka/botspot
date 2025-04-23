import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services/getPage';
import { LegacyPostContainer } from '@botspot/ui';
import { notFound } from 'next/navigation';

export default async function Home() {
  const page = await getPage('home');
  if (!page) return notFound();

  const blocks = page.block_data;

  return (
    <LegacyPostContainer className="w-full">
      {blocks && <WPBlocks blocks={blocks} />}
    </LegacyPostContainer>
  );
}
