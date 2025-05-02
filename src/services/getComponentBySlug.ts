import { WP_REST_API_Page } from 'wp-types';

import { baseUrl, Block } from '.';
import { fetchEntity } from './fetchEntity';

export const getComponentBySlug = async (slug: string) => {
  const data = await fetchEntity<
    ({ block_data: Block[]; has_blocks: true } & WP_REST_API_Page)[]
  >(`${baseUrl}/component?slug=${slug}&_fields[]=block_data&_fields[]=slug`);

  return data?.[0] ?? null;
};
