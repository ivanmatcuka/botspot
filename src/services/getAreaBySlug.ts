import { CustomPost } from '@botspot/ui';

import { baseUrl, Block } from '.';
import { fetchEntity } from './fetchEntity';

export const getAreaBySlug = async (slug: string) => {
  const data = await fetchEntity<CustomPost<Block>[]>(
    `${baseUrl}/area?slug=${slug}`,
  );

  return data?.[0] ?? null;
};
