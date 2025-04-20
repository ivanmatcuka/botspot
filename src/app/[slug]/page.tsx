import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';
import { generateSeo } from '@/utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const page = await getPage(slug);

  if (!page) return {};

  return (
    generateSeo(page) ?? {
      title: `${page.title.rendered} – botspot`,
    }
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const page = await getPage((await params).slug);
  if (!page) return notFound();

  const blocks = page.block_data;

  return <main className="">{blocks && <WPBlocks blocks={blocks} />}</main>;
}
