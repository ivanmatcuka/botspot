import { getProducts } from '@/services';
import { SnackbarProvider } from '@botspot/ui';
import { Metadata } from 'next';

import { DownloadAreaContent } from '../../../components/DownloadAreaContent';

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
      <SnackbarProvider>
        <DownloadAreaContent defaultProductSlug={slug} products={products} />
      </SnackbarProvider>
    </main>
  );
}
