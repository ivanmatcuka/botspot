import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services/getPage';
import { notFound } from 'next/navigation';

export default async function Home() {
  const page = await getPage('home');
  if (!page) return notFound();

  const blocks = page.block_data;

  return (
    <main className="w-full">{blocks && <WPBlocks blocks={blocks} />}</main>
  );
}
