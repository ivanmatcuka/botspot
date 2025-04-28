import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services/getPage';
import { generatePageMetadata } from '@/utils/generatePageMetadata';
import { LegacyPostContainer } from '@botspot/ui';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  return generatePageMetadata(slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  if (!slug) return notFound();

  const page = await getPage(slug);
  if (!page) return notFound();

  const blocks = page.block_data;

  return (
    <LegacyPostContainer className="w-full">
      {blocks && <WPBlocks blocks={blocks} />}
    </LegacyPostContainer>
  );
}
