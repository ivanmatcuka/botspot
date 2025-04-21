import { WPBlocks } from '@/components/WPBlocks';
import { getAreaBySlug } from '@/services/getAreaBySlug';
import { generateSeo } from '@/utils/generateSeo';
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
  const area = await getAreaBySlug(slug);

  if (!area) return {};

  return (
    generateSeo(area) ?? {
      title: `${area.title.rendered} – botspot`,
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
