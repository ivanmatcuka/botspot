'use server';

import { baseUrl, CustomPost } from '.';
import { fetchCollection } from './fetchCollection';
import { getCategory } from './getCategory';

export const getPosts = async (page = 1, perPage = 12) => {
  const category = await getCategory('3d-academy');
  if (!category) return { count: 0, data: [] };

  return fetchCollection<CustomPost>(
    `${baseUrl}/posts?orderby=modified&per_page=${perPage}&page=${page}&categories=${category.id}&_embed`,
  );
};
