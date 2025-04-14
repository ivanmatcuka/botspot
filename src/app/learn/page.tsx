import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';
import { notFound } from 'next/navigation';

export default async function Learn() {
  const page = await getPage('learn');
  if (!page) return notFound();

  const blocks = page.block_data;

  return <main className="">{blocks && <WPBlocks blocks={blocks} />}</main>;
}
