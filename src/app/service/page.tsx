import { getPage } from '@/services';
import { notFound } from 'next/navigation';

import { WPBlocks } from '../../components/WPBlocks';

export default async function Service() {
  const page = await getPage('3d-scan-service');
  if (!page) return notFound();

  const blocks = page.block_data;

  return <main className="">{blocks && <WPBlocks blocks={blocks} />}</main>;
}
