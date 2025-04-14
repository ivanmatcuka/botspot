'use client';

import * as WPImports from '@botspot/ui';
import { ComponentProps, FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { getProducts } from '../services/index';

export const ProductsTopic: FC<
  ComponentProps<typeof WPImports.ProductsTopic>
> = (props) => {
  const { setValue } = useFormContext() ?? {};

  return (
    <WPImports.ProductsTopic
      {...props}
      onChange={(topic) => {
        setValue?.('your-topic', topic);
      }}
      getProducts={getProducts}
    />
  );
};
