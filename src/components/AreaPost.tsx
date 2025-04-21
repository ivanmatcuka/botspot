import { CustomFields } from '@/services';
import { getAreaBySlug } from '@/services/getAreaBySlug';
import { getPostBySlug } from '@/services/getPostBySlug';
import { getFeaturedImageUrl } from '@/utils/getFeaturedImageUrl';
import { GalleryTile, SecondaryBlock } from '@botspot/ui';

import { NextButton } from './NextButton';

type AreaPostProps = {
  slug: string;
};
export default async function AreaPost({ slug }: AreaPostProps) {
  const area = await getAreaBySlug(slug);
  const { post: acfPost }: Partial<CustomFields> = area?.acf ?? {};
  const post = acfPost?.post_name
    ? await getPostBySlug(acfPost.post_name)
    : null;
  const relatedImage = getFeaturedImageUrl(post ?? undefined);

  if (!post) return null;

  return (
    <GalleryTile imgUrl={relatedImage}>
      <SecondaryBlock
        headline={post.title.rendered}
        sublineElement={post.excerpt.rendered}
      >
        <NextButton href={`/3d-academy/${post.slug}`} variant="primary">
          Read Full Story
        </NextButton>
      </SecondaryBlock>
    </GalleryTile>
  );
}
