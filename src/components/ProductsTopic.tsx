'use client';

import * as botspot from '@botspot/ui';
import { useSearchParams } from 'next/navigation';
import { ComponentProps, FC, Suspense } from 'react';
import { useFormContext } from 'react-hook-form';

import { getProducts } from '../services/index';

const ProductsTopicWrapper: FC<ComponentProps<typeof botspot.ProductsTopic>> = (
  props,
) => {
  const { setValue } = useFormContext() ?? {};
  const searchParams = useSearchParams();
  const search = searchParams.get('default') ?? undefined;

  return (
    <botspot.ProductsTopic
      {...props}
      defaultProductName={search}
      getProducts={getProducts}
      onChange={(topic) => setValue?.('your-topic', topic)}
    />
  );
};

export const ProductsTopic: FC<ComponentProps<typeof botspot.ProductsTopic>> = (
  props,
) => (
  <Suspense>
    <ProductsTopicWrapper {...props} />
  </Suspense>
);
