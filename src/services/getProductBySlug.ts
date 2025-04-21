import { baseUrl, CustomPost } from '.';
import { fetchEntity } from './fetchEntity';

export const getProductBySlug = async (slug: string) => {
  const data = await fetchEntity<CustomPost[]>(
    `${baseUrl}/product?slug=${slug}&_embed&acf_format=standard`,
  );

  return data?.[0] ?? null;
};
