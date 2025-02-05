import { SkeletonVideo } from '../../components/SkeletonVideo';

import { Iframe } from '@/app/components/3dIframe/3dIframe';
import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm';
import { Gallery } from '@/app/components/Gallery/Gallery';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { MediaBlock } from '@/app/components/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { ThemedContainer } from '@/app/components/ThemedContainer';
import { Tile } from '@/app/components/Tile/Tile';
import { UnorderedList } from '@/app/components/UnorderedList';
import { UnorderedListItem } from '@/app/components/UnorderedListItem';
import {
  CustomFields,
  CustomPost,
  getPostBySlug,
  getProductBySlug,
} from '@/app/service';
import { generateSeo, getFeaturedImageUrl } from '@/app/utils';

import { Box } from '@mui/material';
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

  const tileHeadlines = (
    parse(product.content.rendered) as ReactElement[]
  ).filter((element) => element.type === 'h4');

  const groups = (parse(product.content.rendered) as ReactElement[]).find(
    (element) => element.props?.className?.includes('wp-block-group'),
  );

  const lists = (parse(product.content.rendered) as ReactElement[]).filter(
    (element) => element.type === 'ul',
  );

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

      <MediaBlock
        assetUrl={picture}
        containerClassName="block md:hidden"
        objectFit="cover"
        banner
      />

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

      <Box my={{ xs: 5, md: 10 }}>
        <Gallery
          firstChild={<Iframe src={firstAnimation ?? ''} />}
          secondChild={<Iframe src={secondAnimation ?? ''} />}
        />
      </Box>

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
