import { WP_REST_API_Attachment, WP_REST_API_Post } from "wp-types";

export const getFeaturedImageUrl = (post: WP_REST_API_Post) => (
    post._embedded?.[
      'wp:featuredmedia'
    ]?.[0] as WP_REST_API_Attachment
  )?.source_url ?? '/img/banners/innovation-lab.png';