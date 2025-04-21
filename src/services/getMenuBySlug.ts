import { customUrl, MenuItem } from '.';
import { fetchEntity } from './fetchEntity';

export const getMenuBySlug = async (slug: string): Promise<MenuItem[]> => {
  const data = await fetchEntity<MenuItem[]>(`${customUrl}/menus/${slug}`);
  return data ?? [];
};
