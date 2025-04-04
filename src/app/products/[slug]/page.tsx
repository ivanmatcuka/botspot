export const revalidate = 0;

import { Box } from '@mui/material';
import parse from 'html-react-parser';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidElement, ReactElement } from 'react';

import { Iframe } from '@/components/3dIframe';
import { Banner } from '@/components/Banner';
import { Button } from '@/components/Button';
import { FeedbackForm } from '@/components/FeedbackForm';
import { Gallery } from '@/components/Gallery';
import { GalleryTile } from '@/components/GalleryTile';
import { MainBlock } from '@/components/MainBlock';
import { MediaBlock } from '@/components/MediaBlock';
import { PageContainer } from '@/components/PageContainer';
import { SecondaryBlock } from '@/components/SecondaryBlock';
import { SkeletonVideo } from '@/components/SkeletonVideo';
import { ThemedContainer } from '@/components/ThemedContainer';
import { Tile } from '@/components/Tile';
import { UnorderedList } from '@/components/UnorderedList';
import { UnorderedListItem } from '@/components/UnorderedListItem';
import {
  CustomFields,
  CustomPost,
  getPostBySlug,
  getProductBySlug,
} from '@/service';
import { generateSeo, getFeaturedImageUrl } from '@/utils';

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
    picture,
    closeup,
    banner,

    'demo-video': demoVideo,

    'first-animation': firstAnimation,
    'second-animation': secondAnimation,

    'first-headline': firstHeadline,
    'first-subline': firstSubline,
    'second-headline': secondHeadline,
    'second-subline': secondSubline,

    post: acfPost,
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
          primaryCta={
            <Button href={`/download-area/${product.slug}`} variant="primary">
              Download Data Sheet
            </Button>
          }
          secondaryCta={
            <Button
              href="https://outlook.office365.com/book/Contactbotspot3DScanGmbH@botspot.de/s/ob7tkWl_QESAXQPuuaQR_w2"
              variant="secondary"
            >
              Request a Demo
            </Button>
          }
          sublineElement={product.excerpt.rendered}
        />
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

      <PageContainer mt={{ xs: 5, md: 10 }}>
        <MainBlock headline={firstHeadline} subline={firstSubline} />
      </PageContainer>

      <MediaBlock assetUrl={closeup} objectFit="cover" fullHeight />

      <PageContainer mt={{ xs: 10, md: 15 }}>
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
        <Box my={{ xs: 5, md: 10 }}>
          <Gallery
            firstChild={<Iframe src={firstAnimation} />}
            secondChild={<Iframe src={secondAnimation} />}
          />
        </Box>
      )}

      {groups?.props?.children && (
        <PageContainer my={{ xs: 5, md: 10 }}>
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
            primaryCta={
              <Button href={`/3d-academy/${post.slug}`} variant="primary">
                Read Full Story
              </Button>
            }
            sublineElement={post.excerpt.rendered}
          />
        </GalleryTile>
      )}

      <FeedbackForm defaultTopic={product.title.rendered} />
    </main>
  );
}
