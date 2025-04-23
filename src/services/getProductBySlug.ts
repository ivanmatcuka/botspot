import { CustomPost } from '@botspot/ui';

import { baseUrl, Block } from '.';
import { fetchEntity } from './fetchEntity';

export const getProductBySlug = async (slug: string) => {
  const data = await fetchEntity<CustomPost<Block>[]>(
    `${baseUrl}/product?slug=${slug}&_embed&acf_format=standard`,
  );

  return data?.[0] ?? null;
};
