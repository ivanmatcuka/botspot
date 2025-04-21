import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';
import { generateSeo } from '@/utils/meta';
import { ThemedContainer } from '@botspot/ui';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const slug = (await params).slug.pop() ?? '';
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
  params: Promise<{ slug: string[] }>;
}) {
  const slug = (await params).slug.pop() ?? '';
  const page = await getPage(slug);

  if (!page) return notFound();

  const blocks = page.block_data;

  return (
    <ThemedContainer className="w-full">
      {blocks && <WPBlocks blocks={blocks} />}
    </ThemedContainer>
  );
}
