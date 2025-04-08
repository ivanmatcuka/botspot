import { LandingPageProduct } from './LandingPageProduct';

import { getProducts } from '@/services';

export default async function LandingPageProducts() {
  const { data: products } = await getProducts();

  return products.map((product) => (
    <LandingPageProduct key={product.id} product={product} />
  ));
}
