import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ExtraFooter } from '../../../components/ExtraFooter';

export const metadata: Metadata = {
  title: 'CAREERS – botspot',
};

export default async function Careers() {
  const page = await getPage('careers');
  if (!page) return notFound();

  const blocks = page.block_data;

  return (
    <main className="">
      {blocks && <WPBlocks blocks={blocks} />}

      <ExtraFooter />
    </main>
  );
}
