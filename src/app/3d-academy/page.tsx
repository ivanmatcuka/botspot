import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';

export default async function Blog() {
  const page = await getPage('3d-academy');
  const blocks = page?.block_data;

  return <main className="">{blocks && <WPBlocks blocks={blocks} />}</main>;
}
