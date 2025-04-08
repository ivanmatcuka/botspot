import { getPostBySlug } from '@/services';
import { getFeaturedImageUrl } from '@/utils';
import { PageContainer, Post } from '@botspot/ui';

import { Button } from './NextButton/NextButton';

const POST_SLUG = 'scanning-horses';

export default async function InnovationLabPost() {
  const post = await getPostBySlug(POST_SLUG);

  if (!post) return null;

  return (
    <PageContainer mb={0}>
      <Post
        cta={
          <Button href={`/3d-academy/${post.slug}`} variant="secondary">
            Read Full Story
          </Button>
        }
        featuredImage={getFeaturedImageUrl(post)}
        title={post.title.rendered}
      />
    </PageContainer>
  );
}
