import { getProducts } from '@/services';

import { LandingPageProduct } from './LandingPageProduct';

export default async function LandingPageProducts() {
  const { data: products } = await getProducts();

  return products.map((product) => (
    <LandingPageProduct key={product.id} product={product} />
  ));
}
