import { CustomPost, getPages } from '@/services';
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';
import { WP_REST_API_Attachment } from 'wp-types';
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
        authors: graph?.author,
        description: yoast.description,
        keywords: graph?.keywords,
        publisher: yoast.article_publisher,
        robots: yoast.robots as Robots,
        title: yoast.title,
        openGraph: {
          description: yoast.og_description,
          images: yoast.og_image,
          locale: yoast.og_locale,
          siteName: yoast.og_site_name,
          title: yoast.og_title,
          type: yoast.og_type,
          url: yoast.og_url,
        } as OpenGraph,
        twitter: {
          card: yoast.twitter_card,
          creator: yoast.twitter_creator,
          site: yoast.twitter_site,
        } as Twitter,
      }
    : {
        title: `${post.title.rendered} – botspot`,
      };

  return result;
};

export const generatePageMetadata = async (slug: string): Promise<Metadata> => {
  const pages = await getPages();
  const page = pages.data.find((page) => page.slug === slug);

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
