import { getAreaBySlug } from '@/services';
import { getFeaturedImageUrl } from '@/utils';
import { GalleryTile, SecondaryBlock } from '@botspot/ui';

import { Button } from './NextButton/NextButton';

type AreaPostProps = {
  slug: string;
};
export default async function AreaPost({ slug }: AreaPostProps) {
  const area = await getAreaBySlug(slug);
  const post = area?.acf?.post;
  const relatedImage = getFeaturedImageUrl(post ?? undefined);

  if (!post) return null;

  return (
    <GalleryTile imgUrl={relatedImage}>
      <SecondaryBlock
        primaryCta={
          <Button href={`/3d-academy/${post.post_name}`} variant="primary">
            Read Full Story
          </Button>
        }
        headline={post.post_title}
        sublineElement={post.post_title}
      />
    </GalleryTile>
  );
}
