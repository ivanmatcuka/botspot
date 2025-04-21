import { baseUrl, CustomPost } from '.';
import { fetchCollection } from './fetchCollection';
import { getCategory } from './getCategory';

export const getPeople = async () => {
  const category = await getCategory('people');
  if (!category) return { count: 0, data: [] };

  return fetchCollection<CustomPost>(
    `${baseUrl}/posts?categories=${category.id}&per_page=100&_embed`,
  );
};
