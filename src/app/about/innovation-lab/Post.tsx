import { NextButton } from '@/components/NextButton';
import { getPostBySlug } from '@/services';
import { getFeaturedImageUrl } from '@/utils';
import { PageContainer, Post } from '@botspot/ui';

const POST_SLUG = 'scanning-horses';

export default async function InnovationLabPost() {
  const post = await getPostBySlug(POST_SLUG);

  if (!post) return null;

  return (
    <PageContainer mb={0}>
      <Post
        cta={
          <NextButton href={`/3d-academy/${post.slug}`} variant="secondary">
            Read Full Story
          </NextButton>
        }
        featuredImage={getFeaturedImageUrl(post)}
        title={post.title.rendered}
      />
    </PageContainer>
  );
}
