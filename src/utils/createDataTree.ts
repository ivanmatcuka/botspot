import type { Metadata } from 'next';

import { MenuItem } from '@/services';
import { normalizeURL } from '@/utils/normalizeURL';

export const metadata: Metadata = {
  description: '3D Scanning Services',
  title: 'botspot',
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      sizes: '48x48',
      url: '/favicon-48x48.png',
    },
  ],
};

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
        href: normalizeURL(data.url),
        label: data.title,
      }),
  );

  const dataTree: Link[] = [];

  dataset.forEach((data) => {
    if (data.menu_item_parent !== '0') {
      hashTable[data.menu_item_parent].children = [];
      hashTable[data.menu_item_parent].children?.push(hashTable[data.ID]);
    } else {
      dataTree.push(hashTable[data.ID]);
    }
  });

  return dataTree;
};
