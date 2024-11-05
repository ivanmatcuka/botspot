import { CustomPost } from "@/app/service";

import { WP_REST_API_Attachment } from "wp-types";

export const getFeaturedImageUrl = (post?: CustomPost) => (
    post?._embedded?.[
      'wp:featuredmedia'
    ]?.[0] as WP_REST_API_Attachment
  )?.source_url ?? '/img/banners/innovation-lab.png';