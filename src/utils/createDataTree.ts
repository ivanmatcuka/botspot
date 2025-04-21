// Taken form stackoverflow but modified
import { MenuItem } from '@/services';
import { normalizeURL } from '@/utils/normalizeURL';

type Link = {
  children?: Link[];
  href: string;
  label: string;
};
export const createDataTree = (dataset: MenuItem[]) => {
  const hashTable: Record<string, Link> = Object.create(null);

  dataset.forEach(
    (data) =>
      (hashTable[data.ID] = {
        children: [],
        href: normalizeURL(data.url),
        label: data.title,
      }),
  );

  const dataTree: Link[] = [];

  dataset.forEach((data) => {
    if (data.menu_item_parent !== '0') {
      const children = hashTable[data.menu_item_parent].children;
      children?.push(hashTable[data.ID]);
    } else {
      dataTree.push(hashTable[data.ID]);
    }
  });

  return dataTree;
};
