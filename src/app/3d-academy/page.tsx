import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';
import { notFound } from 'next/navigation';

export default async function Blog() {
  const page = await getPage('3d-academy');
  if (!page) return notFound();

  const blocks = page.block_data;

  return <main className="">{blocks && <WPBlocks blocks={blocks} />}</main>;
}
