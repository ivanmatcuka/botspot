import { getPage } from '@/services';

import { WPBlocks } from '../../../components/WPBlocks';

export default async function Areas({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const page = await getPage((await params).slug);
  const blocks = page?.block_data;

  return <main className="">{blocks && <WPBlocks blocks={blocks} />}</main>;
}
