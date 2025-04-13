import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';

export default async function Areas() {
  const page = await getPage('home');
  const blocks = page?.block_data;

  return <main className="">{blocks && <WPBlocks blocks={blocks} />}</main>;
}
