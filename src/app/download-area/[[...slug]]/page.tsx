import { DownloadAreaContent } from '../DownloadAreaContent';

import { Metadata } from 'next';

import { getProducts } from '@/service';


export const metadata: Metadata = {
  title: 'DOWNLOAD AREA – botspot',
};

export default async function DownloadArea({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const slug = (await params).slug?.[0];
  const { data: products } = await getProducts();

  return (
    <main className="m-auto">
      <DownloadAreaContent defaultProductSlug={slug} products={products} />
    </main>
  );
}
