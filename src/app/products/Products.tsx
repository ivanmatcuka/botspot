import { Button } from '@/components/Button';
import { MediaBlock } from '@/components/MediaBlock';
import { PageContainer } from '@/components/PageContainer';
import { SecondaryBlock } from '@/components/SecondaryBlock';
import { CustomFields, getProducts } from '@/services';

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

        <PageContainer mt={{ xs: 10, md: 15 }}>
          <SecondaryBlock
            headline={product?.acf?.['full-name'] || product.title.rendered}
            primaryCta={
              <Button href={`/products/${product.slug}`} variant="primary">
                Explore {product?.acf?.['short-name'] || product.title.rendered}
              </Button>
            }
            secondaryCta={
              <Button
                href={`/download-area/${product.slug}`}
                variant="secondary"
              >
                Download Data Sheet
              </Button>
            }
            sublineElement={product.excerpt.rendered}
          />
        </PageContainer>
      </div>
    );
  });
}
