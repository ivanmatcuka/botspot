import { NextButton } from '@/components/NextButton';
import { WPBlocks } from '@/components/WPBlocks';
import { CustomFields, CustomPost } from '@/services';
import { getPostBySlug } from '@/services/getPostBySlug';
import { getProductBySlug } from '@/services/getProductBySlug';
import { getFeaturedImageUrl } from '@/utils/getFeaturedImageUrl';
import { generateSeo } from '@/utils/meta';
import {
  Banner,
  GalleryTile,
  MainBlock,
  MediaBlock,
  PageContainer,
  SecondaryBlock,
  SkeletonVideo,
} from '@botspot/ui';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const product = await getProductBySlug(slug);

  if (!product) return {};

  return (
    generateSeo(product) ?? {
      title: `${product.title.rendered} – botspot`,
    }
  );
}

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  const blocks = product.block_data;

  if (!product) return notFound();

  const {
    banner,
    closeup,
    'demo-url': demoUrl,
    'demo-video': demoVideo,
    'first-headline': firstHeadline,
    'first-subline': firstSubline,
    picture,
    post: acfPost,
    'second-headline': secondHeadline,
    'second-subline': secondSubline,
  }: Partial<CustomFields> = product.acf ?? {};

  const post: CustomPost | null = acfPost?.post_name
    ? await getPostBySlug(acfPost.post_name)
    : null;

  const relatedImage = getFeaturedImageUrl(post ?? undefined);

  return (
    <main className="">
      {banner && (
        <Banner
          headline={product.title.rendered}
          mediaBlockOptions={{ assetUrl: banner }}
          sublineElement={product.excerpt.rendered}
        >
          <NextButton href={`${product.acf?.['demo-url']}`} variant="primary">
            Download Data Sheet
          </NextButton>
          <NextButton href={demoUrl} target="_blank" variant="secondary">
            Request a Demo
          </NextButton>
        </Banner>
      )}

      {/* XS */}
      <MediaBlock
        assetUrl={picture}
        containerClassName="block md:hidden"
        objectFit="cover"
        banner
      />

      {/* MD */}
      <MediaBlock
        assetUrl={picture}
        containerClassName="hidden md:block"
        objectFit="contain"
        banner
      />

      <PageContainer my={{ md: 10, xs: 5 }}>
        <MainBlock headline={firstHeadline} subline={firstSubline} />
      </PageContainer>

      <MediaBlock assetUrl={closeup} objectFit="cover" fullHeight />

      <PageContainer mt={{ md: 15, xs: 10 }}>
        <MainBlock headline={secondHeadline} subline={secondSubline} />
      </PageContainer>

      {!!blocks && <WPBlocks blocks={blocks} />}

      {demoVideo && (
        <PageContainer my={{ md: 15, xs: 10 }}>
          <SkeletonVideo videoSrc={demoVideo} autoPlay loop muted />
        </PageContainer>
      )}

      {post && (
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
      )}
    </main>
  );
}
