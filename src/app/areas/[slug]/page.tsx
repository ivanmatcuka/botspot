import { WPBlocks } from '@/components/WPBlocks';
import { getAreaBySlug, getProductBySlug } from '@/services';
import { generateSeo } from '@/utils/meta';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import AreaPost from '../../../components/AreaPost';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const product = await getProductBySlug(slug);

  if (!product) return {};

  return (
    generateSeo(product) ?? {
      title: `${product.title.rendered} – botspot`,
    }
  );
}

export default async function Commercial({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const page = await getAreaBySlug(slug);
  if (!page) return notFound();

  const blocks = page.block_data;

  return (
    <main className="">
      {blocks && <WPBlocks blocks={blocks} />}

      <Suspense>
        <AreaPost slug={slug} />
      </Suspense>
    </main>
  );
}
