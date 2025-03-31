import { FC } from 'react';

import { Button } from '@/components/Button';
import { MediaBlock } from '@/components/MediaBlock';
import { PageContainer } from '@/components/PageContainer';
import { ScrollableBlock } from '@/components/ScrollableBlock';
import { SecondaryBlock } from '@/components/SecondaryBlock';
import { CustomFields, CustomPost } from '@/service';
import { getFeaturedImageUrl } from '@/utils';

type LandingPageProductProps = {
  product: CustomPost;
};
export const LandingPageProduct: FC<LandingPageProductProps> = ({
  product,
}) => {
  if (!product.acf) return null;

  const imagesUrls =
    (product.acf as CustomFields).photo_gallery?.animation
      .flat()
      .map((url) => url.full_image_url) ?? [];

  const hasEnoughImages = imagesUrls.length > 9;

  const contentBlock = (
    <SecondaryBlock
      headline={product?.acf?.['full-name'] || product.title.rendered}
      primaryCta={
        <Button href={`/products/${product.slug}`} variant="primary">
          Explore {product?.acf?.['short-name'] || product.title.rendered}
        </Button>
      }
      secondaryCta={
        <Button href={`/download-area/${product.slug}`} variant="secondary">
          Download Data Sheet
        </Button>
      }
      sublineElement={product.excerpt.rendered}
    />
  );

  return hasEnoughImages ? (
    <ScrollableBlock imagesUrls={imagesUrls} key={product.id}>
      {contentBlock}
    </ScrollableBlock>
  ) : (
    <>
      <MediaBlock
        assetUrl={imagesUrls[0] ?? getFeaturedImageUrl(product)}
        key={product.id}
        objectFit="contain"
      />
      <PageContainer>{contentBlock}</PageContainer>
    </>
  );
};
