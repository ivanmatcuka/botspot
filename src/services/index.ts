import type {
  WP_REST_API_Categories,
  WP_REST_API_Page,
  WP_REST_API_Post,
} from 'wp-types';

import { DeepPartial, Seo } from '@/types/yoast';

export type CustomPost = {
  acf?: Partial<CustomFields>;
  yoast_head_json?: DeepPartial<Seo>;
} & WP_REST_API_Post;

export type CustomFields = {
  banner: string;
  closeup: string;

  datasheet: string;
  'demo-video': string;
  'first-animation': string;
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

const baseUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp/v2`;
const formsUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/contact-form-7/v1/contact-forms`;

const requestInit: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getPosts = async (
  page = 1,
  perPage = 12,
): Promise<{ count: number; data: CustomPost[] }> => {
  const category = await getCategory('3d-academy');
  if (!category) return { count: 0, data: [] };

  const response = await fetch(
    `${baseUrl}/posts?&orderby=modified&per_page=${perPage}&page=${page}&categories=${category.id}&_embed`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;
    return { count, data };
  } catch {
    return { count: 0, data: [] };
  }
};

export const getPost = async (id: number): Promise<CustomPost | null> => {
  const response = await fetch(
    `${baseUrl}/posts?include=${id}&_embed`,
    requestInit,
  );

  try {
    const data = await response.json();
    return data[0];
  } catch (error) {
    return null;
  }
};

export const getPostBySlug = async (
  slug: string,
): Promise<CustomPost | null> => {
  const response = await fetch(
    `${baseUrl}/posts?slug=${slug}&_embed&acf_format=standard`,
    requestInit,
  );

  try {
    const data = await response.json();
    return data[0];
  } catch (error) {
    return null;
  }
};

export const getProductBySlug = async (
  slug: string,
): Promise<CustomPost | null> => {
  const response = await fetch(
    `${baseUrl}/product?slug=${slug}&_embed&acf_format=standard`,
    requestInit,
  );

  try {
    const data = await response.json();
    return data[0];
  } catch (error) {
    return null;
  }
};

export const getAreaBySlug = async (
  slug: string,
): Promise<
  | ({
      block_data: Block[];
      has_blocks: true;
    } & CustomPost)
  | null
> => {
  const response = await fetch(
    `${baseUrl}/area?slug=${slug}&_embed&acf_format=standard`,
    requestInit,
  );

  try {
    const data = await response.json();
    return data[0];
  } catch (error) {
    return null;
  }
};

export const getPeople = async (): Promise<{
  count: number;
  data: CustomPost[];
}> => {
  const category = await getCategory('people');
  if (!category) return { count: 0, data: [] };

  const response = await fetch(
    `${baseUrl}/posts?&categories=${category.id}&per_page=100&_embed`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;
    return { count, data };
  } catch {
    return { count: 0, data: [] };
  }
};

export const getProducts = async (): Promise<{
  count: number;
  data: CustomPost[];
}> => {
  const response = await fetch(
    `${baseUrl}/product?&per_page=100&acf_format=standard`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;

    if (data?.data?.status) {
      return { count: 0, data: [] };
    }

    return { count, data };
  } catch {
    return { count: 0, data: [] };
  }
};

export const getJobs = async (): Promise<{
  count: number;
  data: CustomPost[];
}> => {
  const category = await getCategory('jobs');
  if (!category) return { count: 0, data: [] };

  const response = await fetch(
    `${baseUrl}/posts?&categories=${category.id}&per_page=100&_embed`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;
    return { count, data };
  } catch {
    return { count: 0, data: [] };
  }
};

export const getCategory = async (
  slug: string,
): Promise<WP_REST_API_Categories[number] | null> => {
  const response = await fetch(
    `${baseUrl}/categories?slug=${slug}`,
    requestInit,
  );

  try {
    const data = (await response.json()) as WP_REST_API_Categories;
    return data[0];
  } catch (error) {
    return null;
  }
};

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
  | 'ui/landing-page-products'
  | 'ui/partner-logo'
  | 'ui/partner-logo-container'
  | 'ui/dynamic-form';
export type Block = {
  attrs: any;
  blockName: WPComponentNames;
  innerBlocks: Block[];
  innerContent: unknown[];
  innerHTML: string;
  rendered: string;
};
export const getPage = async (
  slug: string,
): Promise<
  | ({
      block_data: Block[];
      has_blocks: true;
    } & WP_REST_API_Page)
  | null
> => {
  const response = await fetch(
    `${baseUrl}/pages?slug=${slug}&_embed`,
    requestInit,
  );

  try {
    const data = await response.json();
    return data[0];
  } catch (error) {
    return null;
  }
};

export const getPages = async (): Promise<{
  count: number;
  data: CustomPost[];
}> => {
  const response = await fetch(`${baseUrl}/pages`, requestInit);

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;
    return { count, data };
  } catch {
    return { count: 0, data: [] };
  }
};

export const submitFeedbackForm = async (
  formData: FormData,
  formId: number,
) => {
  try {
    const response = await fetch(`${formsUrl}/${formId}/feedback`, {
      body: formData,
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    return error;
  }
};
