import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';

export default async function Learn() {
  const page = await getPage('learn');
  const blocks = page?.block_data;

  return <main className="">{blocks && <WPBlocks blocks={blocks} />}</main>;
}
