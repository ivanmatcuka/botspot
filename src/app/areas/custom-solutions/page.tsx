import { WPBlocks } from '@/components/WPBlocks';
import { getAreaBySlug } from '@/services';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import AreaPost from '../../../components/AreaPost';

const AREA_SLUG = 'areas-custom';

export default async function Commercial() {
  const page = await getAreaBySlug(AREA_SLUG);
  if (!page) return notFound();

  const blocks = page.block_data;

  return (
    <main className="">
      {blocks && <WPBlocks blocks={blocks} />}

      <Suspense>
        <AreaPost slug={AREA_SLUG} />
      </Suspense>
    </main>
  );
}
