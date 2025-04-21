export type WPComponentNames =
  | 'ui/banner'
  | 'ui/button'
  | 'ui/media-block'
  | 'ui/main-block'
  | 'ui/page-container'
  | 'ui/secondary-block'
  | 'ui/tile'
  | 'ui/gallery-tile'
  | 'ui/iframe'
  | 'ui/skeleton-video'
  | 'ui/typography'
  | 'ui/gallery'
  | 'ui/posts'
  | 'ui/people'
  | 'ui/jobs'
  | 'ui/partner-logo'
  | 'ui/partner-logo-container'
  | 'ui/dynamic-form'
  | 'ui/download-area-content'
  | 'ui/products-topic'
  | 'ui/products-list';

export type Block = {
  attrs: unknown;
  blockName: WPComponentNames;
  innerBlocks: Block[];
  innerContent: unknown[];
  innerHTML: string;
  rendered: string;
};

import type { WP_REST_API_Post } from 'wp-types';

import { DeepPartial, Seo } from '@/types/yoast';

export type CustomPost = {
  acf?: Partial<CustomFields>;
  block_data: Block[];
  has_blocks: true;
  yoast_head_json?: DeepPartial<Seo>;
} & WP_REST_API_Post;

export type CustomFields = {
  banner: string;
  closeup: string;
  datasheet: string;
  'demo-url': string;
  'demo-video': string;
  'first-headline': string;
  'first-subline': string;
  'full-name': string;
  picture: string;
  'second-animation': string;
  'second-headline': string;
  'second-subline': string;
  'short-name': string;

  photo_gallery: {
    animation: { full_image_url: string }[];
  };

  post: {
    post_excerpt: string;
    post_name: string;
    post_title: string;
  } & CustomPost;
};

export const baseUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp/v2`;
export const customUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/botspot/v1`;

export type MenuItem = {
  attr_title: string;
  classes: string[];
  comment_count: string;
  comment_status: string;
  db_id: number;
  description: string;
  filter: string;
  guid: string;
  ID: number;
  menu_item_parent: string;
  menu_order: number;
  object: string;
  object_id: string;
  ping_status: string;
  pinged: string;
  post_author: string;
  post_content: string;
  post_content_filtered: string;
  post_date: string;
  post_date_gmt: string;
  post_excerpt: string;
  post_mime_type: string;
  post_modified: string;
  post_modified_gmt: string;
  post_name: string;
  post_parent: number;
  post_password: string;
  post_status: string;
  post_title: string;
  post_type: string;
  target: string;
  title: string;
  to_ping: string;
  type: string;
  type_label: string;
  url: string;
  xfn: string;
};
