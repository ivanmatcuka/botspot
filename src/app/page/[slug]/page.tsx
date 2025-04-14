import { getPage } from '@/services';
import { notFound } from 'next/navigation';

import { WPBlocks } from '../../../components/WPBlocks';

export default async function Areas({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const page = await getPage((await params).slug);
  if (!page) return notFound();

  const blocks = page.block_data;

  return <main className="">{blocks && <WPBlocks blocks={blocks} />}</main>;
}
