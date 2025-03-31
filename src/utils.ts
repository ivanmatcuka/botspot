import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';
import { WP_REST_API_Attachment } from 'wp-types';

import { CustomPost, getPage } from '@/service';
interface Sizes {
  [size: string]: {
    source_url: string;
  };
}
export const getFeaturedImageUrl = (post?: CustomPost) => {
  return (
    (
      (post?._embedded?.['wp:featuredmedia']?.[0] as WP_REST_API_Attachment)
        ?.media_details?.sizes as Sizes
    )?.large?.source_url ?? '/img/banners/innovation-lab.png'
  );
};

export const generateSeo = (post: CustomPost) => {
  const yoast = post.yoast_head_json;
  const graph = yoast?.schema?.['@graph']?.[0];

  if (!yoast) return null;

  const result: Metadata = yoast
    ? {
        title: yoast.title,
        description: yoast.description,
        keywords: graph?.keywords,
        authors: graph?.author,
        publisher: yoast.article_publisher,
        openGraph: {
          title: yoast.og_title,
          description: yoast.og_description,
          url: yoast.og_url,
          siteName: yoast.og_site_name,
          images: yoast.og_image,
          locale: yoast.og_locale,
          type: yoast.og_type,
        } as OpenGraph,
        robots: yoast.robots as Robots,
        twitter: {
          card: yoast.twitter_card,
          site: yoast.twitter_site,
          creator: yoast.twitter_creator,
        } as Twitter,
      }
    : {
        title: `${post.title.rendered} – botspot`,
      };

  return result;
};

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

export function parseFieldOptions(options: string[]): Record<string, string> {
  return options.reduce(
    (acc, option) => {
      const [key, value] = option.split(':');
      if (key && value) {
        acc[key.trim()] = value.trim();
      }
      return acc;
    },
    {} as Record<string, string>,
  );
}
