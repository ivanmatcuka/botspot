import { CustomPost } from '@botspot/ui';

import { baseUrl, Block } from '.';
import { fetchCollection } from './fetchCollection';
import { getCategory } from './getCategory';

export const getPeople = async () => {
  const category = await getCategory('people');
  if (!category) return { count: 0, data: [] };

  return fetchCollection<CustomPost<Block>>(
    `${baseUrl}/posts?categories=${category.id}&per_page=100&_embed`,
  );
};
