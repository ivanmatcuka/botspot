'use server';

import { CustomPost } from '@botspot/ui';

import { baseUrl, Block } from '../services';
import { fetchCollection } from '../services/fetchCollection';
import { getCategory } from '../services/getCategory';

export const getPosts = async (page = 1, perPage = 12) => {
  const category = await getCategory('3d-academy');
  if (!category) return { count: 0, data: [] };

  return fetchCollection<CustomPost<Block>>(
    `${baseUrl}/posts?orderby=modified&per_page=${perPage}&page=${page}&categories=${category.id}&_embed`,
  );
};
