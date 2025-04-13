import { FeedbackForm } from '@/components/FeedbackForm';
import { NextButton } from '@/components/NextButton';
import {
  CustomFields,
  CustomPost,
  getPostBySlug,
  getProductBySlug,
} from '@/services';
import { generateSeo, getFeaturedImageUrl } from '@/utils';
import {
  Banner,
  Box,
  Button,
  Gallery,
  GalleryTile,
  Iframe,
  MainBlock,
  MediaBlock,
  PageContainer,
  SecondaryBlock,
  SkeletonVideo,
  ThemedContainer,
  Tile,
  UnorderedList,
  UnorderedListItem,
} from '@botspot/ui';
import parse from 'html-react-parser';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidElement, ReactElement } from 'react';

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

  const {
    banner,
    closeup,
    'demo-video': demoVideo,

    'first-animation': firstAnimation,

    'first-headline': firstHeadline,
    'first-subline': firstSubline,

    picture,
    post: acfPost,
    'second-animation': secondAnimation,
    'second-headline': secondHeadline,

    'second-subline': secondSubline,
  }: Partial<CustomFields> = product.acf ?? {};

  const post: CustomPost | null = acfPost?.post_name
    ? await getPostBySlug(acfPost.post_name)
    : null;

  const parsedContent = parse(product.content.rendered) as ReactElement[];
  const tileHeadlines = parsedContent.filter(
    (element) => element.type === 'h4',
  );
  const groups = parsedContent.find((element) =>
    element.props?.className?.includes('wp-block-group'),
  );
  const lists = parsedContent.filter((element) => element.type === 'ul');

  const relatedImage = getFeaturedImageUrl(post ?? undefined);

  return (
    <main className="">
      {banner && (
        <Banner
          headline={product.title.rendered}
          mediaBlockOptions={{ assetUrl: banner }}
          sublineElement={product.excerpt.rendered}
        >
          <Button href={`/download-area/${product.slug}`} variant="primary">
            Download Data Sheet
          </Button>
          <Button
            href="https://outlook.office365.com/book/Contactbotspot3DScanGmbH@botspot.de/s/ob7tkWl_QESAXQPuuaQR_w2"
            variant="secondary"
          >
            Request a Demo
          </Button>
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

      <PageContainer mt={{ md: 10, xs: 5 }}>
        <MainBlock headline={firstHeadline} subline={firstSubline} />
      </PageContainer>

      <MediaBlock assetUrl={closeup} objectFit="cover" fullHeight />

      <PageContainer mt={{ md: 15, xs: 10 }}>
        <MainBlock headline={secondHeadline} subline={secondSubline} />
      </PageContainer>

      {lists.map((item: ReactElement, index: number) => (
        <Tile headline={tileHeadlines[index]?.props?.children} key={item.key}>
          <UnorderedList>
            {item.props?.children
              ?.filter((item: unknown) => isValidElement(item))
              .map((item: ReactElement) => (
                <UnorderedListItem key={item.key}>
                  {item.props.children}
                </UnorderedListItem>
              ))}
          </UnorderedList>
        </Tile>
      ))}

      {firstAnimation && secondAnimation && (
        <Box my={{ md: 10, xs: 5 }}>
          <Gallery>
            <Iframe src={firstAnimation} />
            <Iframe src={secondAnimation} />
          </Gallery>
        </Box>
      )}

      {groups?.props?.children && (
        <PageContainer my={{ md: 10, xs: 5 }}>
          <ThemedContainer className="!p-0" maxWidth="xl">
            {groups.props.children}
          </ThemedContainer>
        </PageContainer>
      )}

      {demoVideo && (
        <PageContainer>
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
            </NextButton>{' '}
          </SecondaryBlock>
        </GalleryTile>
      )}

      <FeedbackForm defaultTopic={product.title.rendered} />
    </main>
  );
}
