import { DeepPartial, Seo } from '@/types/yoast';

import type {
  WP_REST_API_Categories,
  WP_REST_API_Page,
  WP_REST_API_Post,
} from 'wp-types';

export type CustomPost = WP_REST_API_Post & {
  yoast_head_json?: DeepPartial<Seo>;
  acf?: Partial<CustomFields>;
};

export type CustomFields = {
  'full-name': string;
  'short-name': string;

  picture: string;
  closeup: string;
  banner: string;
  datasheet: string;

  'demo-video': string;

  'first-animation': string;
  'second-animation': string;

  'first-headline': string;
  'first-subline': string;
  'second-headline': string;
  'second-subline': string;

  post: CustomPost & {
    post_title: string;
    post_excerpt: string;
    post_name: string;
  };

  photo_gallery: {
    animation: { full_image_url: string }[];
  };
};

const baseUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp/v2`;
const formsUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/contact-form-7/v1/contact-forms`;

const requestInit: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const redirectsUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/redirection/v1/redirect`;
const authUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/simple-jwt-login/v1/auth`;

const getAuth = async () => {
  const response = await fetch(authUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: process.env.WORDPRESS_USER,
      password: process.env.WORDPRESS_PASSWORD,
    }),
  });

  try {
    const data = await response.json();

    return data;
  } catch {
    return null;
  }
};

export const getRedirects = async () => {
  const { data: auth } = await getAuth();
  if (!auth) return { data: [], count: 0 };

  const response = await fetch(`${redirectsUrl}?JWT=${auth.jwt}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return { data: [], count: 0 };
  }

  try {
    const data = await response.json();
    return { data: data.items, count: data.total };
  } catch {
    return { data: [], count: 0 };
  }
};

export const getPosts = async (
  page = 1,
  perPage = 12,
): Promise<{ data: CustomPost[]; count: number }> => {
  const category = await getCategory('3d-academy');
  if (!category) return { data: [], count: 0 };

  const response = await fetch(
    `${baseUrl}/posts?&orderby=modified&per_page=${perPage}&page=${page}&categories=${category.id}&_embed`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;
    return { data, count };
  } catch {
    return { data: [], count: 0 };
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
): Promise<CustomPost | null> => {
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
  data: CustomPost[];
  count: number;
}> => {
  const category = await getCategory('people');
  if (!category) return { data: [], count: 0 };

  const response = await fetch(
    `${baseUrl}/posts?&categories=${category.id}&per_page=100&_embed`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;
    return { data, count };
  } catch {
    return { data: [], count: 0 };
  }
};

export const getProducts = async (): Promise<{
  data: CustomPost[];
  count: number;
}> => {
  const response = await fetch(
    `${baseUrl}/product?&per_page=100&acf_format=standard`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;

    if (data?.data?.status) {
      return { data: [], count: 0 };
    }

    return { data, count };
  } catch {
    return { data: [], count: 0 };
  }
};

export const getJobs = async (): Promise<{
  data: CustomPost[];
  count: number;
}> => {
  const category = await getCategory('jobs');
  if (!category) return { data: [], count: 0 };

  const response = await fetch(
    `${baseUrl}/posts?&categories=${category.id}&per_page=100&_embed`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;
    return { data, count };
  } catch {
    return { data: [], count: 0 };
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

export const getPage = async (
  slug: string,
): Promise<WP_REST_API_Page | null> => {
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
  data: CustomPost[];
  count: number;
}> => {
  const response = await fetch(`${baseUrl}/pages`, requestInit);

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;
    return { data, count };
  } catch {
    return { data: [], count: 0 };
  }
};

export const submitFeedbackForm = async (
  formData: FormData,
  formId: number,
) => {
  try {
    const response = await fetch(`${formsUrl}/${formId}/feedback`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    return error;
  }
};
