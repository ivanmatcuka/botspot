import { WPBlocks } from '@/components/WPBlocks';
import { getAreaBySlug } from '@/services/getAreaBySlug';
import { getPost } from '@/services/getPost';
import { generateSeo } from '@/utils/generateSeo';
import { getFeaturedImageUrl } from '@/utils/getFeaturedImageUrl';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import AttachedPost from '../../../components/AttachedPost';

const DEFAULT_META = {
  title: 'botspot – Area Page',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const area = await getAreaBySlug(slug);

  if (!area) return DEFAULT_META;

  return generateSeo(area) ?? DEFAULT_META;
}

export default async function Area({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const area = await getAreaBySlug(slug);

  if (!area) return notFound();

  const { acf, block_data: blocks } = area;
  const { post: postId, 'post-cta': postCta } = acf ?? {};

  const post = postId ? await getPost(+String(postId)) : null;
  const relatedImage = getFeaturedImageUrl(post ?? undefined);

  return (
    <main className="">
      {blocks && <WPBlocks blocks={blocks} />}

      {post && (
        <Suspense>
          <AttachedPost
            post={post}
            postCta={postCta}
            relatedImage={relatedImage}
          />
        </Suspense>
      )}
    </main>
  );
}
