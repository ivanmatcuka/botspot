import { DownloadAreaContent } from '../DownloadAreaContent';

import { getProducts } from '@/app/service';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DOWNLOAD AREA – botspot',
};

export default async function DownloadArea({
  params,
}: {
  params: { slug?: string[] };
}) {
  const { data: products } = await getProducts();

  return (
    <main className="m-auto">
      <DownloadAreaContent
        defaultProductSlug={params.slug?.[0]}
        products={products}
      />
    </main>
  );
}
