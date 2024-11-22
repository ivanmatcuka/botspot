import { CustomPost } from "@/app/service";

import { WP_REST_API_Attachment } from "wp-types";
interface Sizes {
  [size: string]: {
    source_url: string;
  };
}
export const getFeaturedImageUrl = (post?: CustomPost) => {
  return ((
    post?._embedded?.[
      'wp:featuredmedia'
    ]?.[0] as WP_REST_API_Attachment
  )?.media_details?.sizes as Sizes)?.large?.source_url ?? '/img/banners/innovation-lab.png';
}