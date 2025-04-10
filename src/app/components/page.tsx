import { Block, getPage } from '@/services';
import { notFound } from 'next/navigation';

import { WPBlocks } from '../../components/WPBlocks';

export default async function Components() {
  const page = await getPage('components');
  if (!page) return notFound();

  const blocks = page.block_data as Block[];

  return (
    <main>
      <WPBlocks blocks={blocks} />
    </main>
  );
}
