import { CustomFields, getProducts } from '@/services';
import { MediaBlock, PageContainer, SecondaryBlock } from '@botspot/ui';

import { NextButton } from './NextButton';

export default async function ProductsList() {
  const { data: products } = await getProducts();

  return products.map((product, index) => {
    const { picture }: Partial<CustomFields> = product.acf ?? {};

    return (
      <div key={index}>
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

        <PageContainer mt={{ md: 15, xs: 10 }}>
          <SecondaryBlock
            primaryCta={
              <NextButton href={`/products/${product.slug}`} variant="primary">
                Explore {product?.acf?.['short-name'] || product.title.rendered}
              </NextButton>
            }
            secondaryCta={
              <NextButton
                href={`/download-area/${product.slug}`}
                variant="secondary"
              >
                Download Data Sheet
              </NextButton>
            }
            headline={product?.acf?.['full-name'] || product.title.rendered}
            sublineElement={product.excerpt.rendered}
          />
        </PageContainer>
      </div>
    );
  });
}
