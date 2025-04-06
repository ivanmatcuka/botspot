'use client';

import { LandingPageProduct } from './LandingPageProduct';

import List from 'rc-virtual-list';
import { useEffect, useState } from 'react';

import { CustomPost, getProducts } from '@/service';

export default function LandingPageProducts() {
  const [products, setProducts] = useState<CustomPost[]>([]);

  useEffect(() => {
    getProducts().then(({ data }) => setProducts(data));
  }, []);

  return (
    <List data={products} itemKey="id">
      {(product) => <LandingPageProduct key={product.id} product={product} />}
    </List>
  );
}
