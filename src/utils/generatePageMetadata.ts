import { getPage } from '@/services/getPage';
import { Metadata } from 'next';

import { generateSeo } from './generateSeo';

export const generatePageMetadata = async (slug: string): Promise<Metadata> => {
  const page = await getPage(slug);

  if (!page) {
    return {
      title: 'botspot',
    };
  }

  return (
    generateSeo(page) ?? {
      title: `${page.title.rendered} – botspot`,
    }
  );
};
