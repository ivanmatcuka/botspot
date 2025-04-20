import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';
import { notFound } from 'next/navigation';

export default async function Products() {
  const page = await getPage('products');
  if (!page) return notFound();

  const blocks = page.block_data;

  return <main className="">{blocks && <WPBlocks blocks={blocks} />}</main>;
}
