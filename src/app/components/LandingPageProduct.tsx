import { Button } from '@/app/components/Button/Button';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';
import { ScrollableBlock } from '@/app/components/ScrollableBlock';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { CustomFields } from '@/app/service';
import { getFeaturedImageUrl } from '@/app/utils';

import { FC } from 'react';
import { WP_REST_API_Post } from 'wp-types';

type LandingPageProductProps = {
  product: WP_REST_API_Post;
};
export const LandingPageProduct: FC<LandingPageProductProps> = ({
  product,
}) => {
  if (!product.acf) return null;

  const imagesUrls =
    (product.acf as CustomFields).photo_gallery?.animation
      .flat()
      .map((url) => url.full_image_url) ?? [];

  const contentBlock = (
    <SecondaryBlock
      headline={product.title.rendered}
      primaryCta={
        <Button href={`/products/${product.slug}`} variant="primary">
          Explore {product.title.rendered}
        </Button>
      }
      secondaryCta={
        <Button href="/download-area" variant="secondary">
          Download Data Sheet
        </Button>
      }
      sublineElement={product.excerpt.rendered}
    />
  );

  return imagesUrls.length ? (
    <ScrollableBlock imagesUrls={imagesUrls} key={product.id}>
      {contentBlock}
    </ScrollableBlock>
  ) : (
    <>
      <MediaBlock assetUrl={getFeaturedImageUrl(product)} key={product.id} />
      <PageContainer banner>{contentBlock}</PageContainer>
    </>
  );
};
