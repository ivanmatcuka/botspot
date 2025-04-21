import { WP_REST_API_Attachment, WP_REST_API_Post } from 'wp-types';

interface Sizes {
  [size: string]: {
    source_url: string;
  };
}
export const getFeaturedImageUrl = (
  post?: Pick<
    WP_REST_API_Post,
    'excerpt' | 'id' | 'title' | 'slug' | '_embedded'
  >,
) => {
  const featuredMedia = post?._embedded?.[
    'wp:featuredmedia'
  ]?.[0] as WP_REST_API_Attachment;
  const sizes = featuredMedia?.media_details?.sizes as Sizes;

  return sizes?.large?.source_url ?? '/img/404.webp';
};
