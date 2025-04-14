import { getPage } from '@/services';
import { notFound } from 'next/navigation';

import { WPBlocks } from '../../components/WPBlocks';

export default async function Areas() {
  const page = await getPage('areas-of-use');
  if (!page) return notFound();

  const blocks = page.block_data;

  return <main className="">{blocks && <WPBlocks blocks={blocks} />}</main>;
}
