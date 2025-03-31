import { Button } from '@/components/Button';
import { GalleryTile } from '@/components/GalleryTile';
import { SecondaryBlock } from '@/components/SecondaryBlock';
import { getAreaBySlug } from '@/service';
import { getFeaturedImageUrl } from '@/utils';

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
        headline={post.post_title}
        primaryCta={
          <Button href={`/3d-academy/${post.post_name}`} variant="primary">
            Read Full Story
          </Button>
        }
        sublineElement={post.post_title}
      />
    </GalleryTile>
  );
}
