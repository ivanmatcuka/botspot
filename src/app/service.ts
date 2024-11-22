import type { WP_REST_API_Categories, WP_REST_API_Page, WP_REST_API_Post } from 'wp-types';

export type CustomPost = WP_REST_API_Post & {
  acf?: Partial<CustomFields>;
};

export type CustomFields = {
  'full-name': string;

  picture: string;
  closeup: string;
  banner: string;
  datasheet: string;

  'demo-headline': string;
  'demo-subline': string;
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
  };

  photo_gallery: {
    animation: { full_image_url: string }[];
  };
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const requestInit: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getPosts = async (
  page = 1,
  perPage = 12,
): Promise<{ data: CustomPost[]; count: number }> => {
  const category = await getCategory('3d-academy');
  if (!category) return { data: [], count: 0 };

  const response = await fetch(
    `${baseUrl}posts?&orderby=modified&per_page=${perPage}&page=${page}&categories=${category.id}&_embed`,
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
    `${baseUrl}posts?include=${id}&_embed`,
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
    `${baseUrl}posts?slug=${slug}&_embed&acf_format=standard`,
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
    `${baseUrl}product?slug=${slug}&_embed&acf_format=standard`,
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
    `${baseUrl}posts?&categories=${category.id}&_embed`,
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
    `${baseUrl}product?&&_embed&acf_format=standard`,
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

export const getJobs = async (): Promise<{
  data: CustomPost[];
  count: number;
}> => {
  const category = await getCategory('jobs');
  if (!category) return { data: [], count: 0 };

  const response = await fetch(
    `${baseUrl}posts?&categories=${category.id}&_embed`,
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
    `${baseUrl}categories?slug=${slug}`,
    requestInit,
  );

  try {
    const data = (await response.json()) as WP_REST_API_Categories;
    return data[0];
  } catch (error) {
    return null;
  }
};

export const getPage = async (slug: string): Promise<WP_REST_API_Page | null> => {
  const response = await fetch(
    `${baseUrl}pages?slug=${slug}&_embed`,
    requestInit,
  );

  try {
    const data = await response.json();
    return data[0];
  } catch (error) {
    return null;
  }
};