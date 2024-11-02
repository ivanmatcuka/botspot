import { Iframe } from '@/app/components/3dIframe/3dIframe';
import { Banner } from '@/app/components/Banner/Banner';
import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm';
import { Gallery } from '@/app/components/Gallery/Gallery';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { UnorderedList } from '@/app/components/UnorderedList/UnorderedList';
import { UnorderedListItem } from '@/app/components/UnorderedListItem/UnorderedListItem';
import { getProductBySlug } from '@/services/mainService';

import { Box } from '@mui/material';
import parse from 'html-react-parser';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidElement, ReactElement } from 'react';
import { WP_REST_API_Attachment } from 'wp-types';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return {};

  const featuredImage =
    (product._embedded?.['wp:featuredmedia']?.[0] as WP_REST_API_Attachment)
      ?.source_url ?? '/img/banners/innovation-lab.png';

  return {
    title: `${product.title.rendered} – botspot`,
    openGraph: {
      images: [featuredImage],
    },
  };
}
export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) return notFound();

  const {
    picture,
    closeup,
    banner,
    'first-animation': firstAnimation,
    'second-animation': secondAnimation,

    'first-headline': firstHeadline,
    'first-subline': firstSubline,
    'second-headline': secondHeadline,
    'second-subline': secondSubline,

    post,
  }: any = product.acf;

  const tileHeadlines = (
    parse(product.content.rendered) as ReactElement[]
  ).filter((element) => element.type === 'h4');

  const lists = (parse(product.content.rendered) as ReactElement[]).filter(
    (element) => element.type === 'ul',
  );

  const relatedImage =
    (post?._embedded?.['wp:featuredmedia']?.[0] as WP_REST_API_Attachment)
      ?.source_url ?? '/img/banners/innovation-lab.png';

  return (
    <main className="">
      {banner && (
        <Banner
          headline={product.title.rendered}
          mediaBlockOptions={{ assetUrl: banner }}
          primaryCta={
            <Button href="/download-area" variant="primary">
              Download Data Sheet
            </Button>
          }
          secondaryCta={<Button variant="secondary">Request a Demo</Button>}
          sublineElement={product.excerpt.rendered}
        />
      )}

      <PageContainer mt={{ xs: 5, md: 10 }}>
        <MediaBlock assetUrl={picture} objectFit="cover" />
      </PageContainer>

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

      <Box mb={{ xs: 5, md: 10 }}>
        <Gallery
          firstChild={<Iframe src={firstAnimation} />}
          secondChild={<Iframe src={secondAnimation} />}
        />
      </Box>

      {post && (
        <GalleryTile imgUrl={relatedImage}>
          <SecondaryBlock
            headline={post.post_title}
            primaryCta={
              <Button href={`/blog/${post.ID}`} variant="primary">
                Read Full Story
              </Button>
            }
            sublineElement={post.post_excerpt}
          />
        </GalleryTile>
      )}

      <FeedbackForm />
    </main>
  );
}
