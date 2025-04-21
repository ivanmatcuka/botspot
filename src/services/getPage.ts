import { WP_REST_API_Page } from 'wp-types';

import { baseUrl, Block } from '.';
import { fetchEntity } from './fetchEntity';

export const getPage = async (slug: string) => {
  const data = await fetchEntity<
    ({ block_data: Block[]; has_blocks: true } & WP_REST_API_Page)[]
  >(`${baseUrl}/pages?slug=${slug}&_embed`);
  return data?.[0] ?? null;
};
