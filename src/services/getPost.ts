import { baseUrl, CustomPost } from '.';
import { fetchEntity } from './fetchEntity';

export const getPost = async (id: number) => {
  const data = await fetchEntity<CustomPost[]>(
    `${baseUrl}/posts?include=${id}&_embed`,
  );
  return data?.[0] ?? null;
};
