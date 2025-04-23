import { CustomPost } from '@botspot/ui';

import { Link } from './createDataTree';
import { normalizeURL } from './normalizeURL';

export const attachPage = (
  page: CustomPost,
  navbarItems: Link[],
  domain: 'areas' | 'products',
) => {
  const link = {
    href: `/${domain}/${page.slug}`,
    label: page.title.rendered,
  };

  const parent = navbarItems.find((item) => {
    const link = page.acf?.['parent-page'];
    const pathname = link ? normalizeURL(link) : '';

    return item.href === pathname;
  });

  parent?.children?.push(link);
};
