import { Button } from '@/app/components/Button/Button';
import { Iframe } from '@/app/components/3dIframe/3dIframe';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { Gallery } from '@/app/components/Gallery/Gallery';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { UnorderedList } from '@/app/components/UnorderedList/UnorderedList';
import { UnorderedListItem } from '@/app/components/UnorderedListItem/UnorderedListItem';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';
import { getProductBySlug } from '@/services/mainService';

import parse from 'html-react-parser';
import { Box } from '@mui/material';
import { Metadata } from 'next';
import { isValidElement, ReactElement } from 'react';
import { WP_REST_API_Attachment } from 'wp-types';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return {};

  const { picture, closeup }: any = product.acf;
  const featuredImage =
    (product._embedded?.['wp:featuredmedia']?.[0] as WP_REST_API_Attachment)
      ?.source_url ?? '/img/banners/innovation-lab.png';

  return {
    title: `${product.title.rendered} – botspot`,
    openGraph: {
      images: [featuredImage, picture, closeup],
    },
  };
}
export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) notFound();

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
      {banner && <MediaBlock assetUrl={banner} banner />}
      <PageContainer banner>
        <SecondaryBlock
          subline={
            <span
              dangerouslySetInnerHTML={{ __html: product.excerpt.rendered }}
            />
          }
          headline={product.title.rendered}
          primaryCta={
            <Button variant="primary" href="/download-area">
              Download Data Sheet
            </Button>
          }
          secondaryCta={<Button variant="secondary">Request a Demo</Button>}
        />
      </PageContainer>

      <MediaBlock assetUrl={picture} objectFit="contain" />
      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock headline={firstHeadline} subline={firstSubline} />
      </PageContainer>

      <MediaBlock assetUrl={closeup} fullHeight objectFit="cover" />
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
            subline={
              <span dangerouslySetInnerHTML={{ __html: post.post_excerpt }} />
            }
            headline={post.post_title}
            primaryCta={
              <Button variant="primary" href={`/blog/${post.ID}`}>
                Read Full Story
              </Button>
            }
          />
        </GalleryTile>
      )}

      <FeedbackForm />
    </main>
  );
}
