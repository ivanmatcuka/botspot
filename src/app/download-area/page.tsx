import { DownloadAreaContent } from './DownloadAreaContent';

import { getProducts } from '@/app/service';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DOWNLOAD AREA – botspot',
};

export default async function DownloadArea() {
  const { data: products } = await getProducts();

  return (
    <main className="m-auto">
      <DownloadAreaContent products={products} />
    </main>
  );
}
