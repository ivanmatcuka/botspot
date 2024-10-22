import type {
  WP_REST_API_Attachment,
  WP_REST_API_Categories,
  WP_REST_API_Posts,
} from 'wp-types';

export type ImageGallery = {
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
  page: number = 1,
  perPage: number = 12,
): Promise<{ data: WP_REST_API_Posts; count: number }> => {
  const category = await getCategory('3d-academy');
  if (!category) return { data: [], count: 0 };

  const response = await fetch(
    `${baseUrl}posts?per_page=${perPage}&page=${page}&categories=${category.id}&_embed`,
    requestInit,
  );

  const data = await response.json();
  const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;

  return { data, count };
};

export const getPost = async (
  id: number,
): Promise<WP_REST_API_Posts[number]> => {
  const response = await fetch(
    `${baseUrl}posts?include=${id}&_embed`,
    requestInit,
  );

  const data = await response.json();
  return data[0];
};

export const getPostBySlug = async (
  slug: string,
): Promise<WP_REST_API_Posts[number]> => {
  const response = await fetch(
    `${baseUrl}posts?slug=${slug}&_embed&acf_format=standard`,
    requestInit,
  );

  const data = await response.json();
  return data[0];
};

export const getProductBySlug = async (
  slug: string,
): Promise<WP_REST_API_Posts[number]> => {
  const response = await fetch(
    `${baseUrl}product?slug=${slug}&_embed&acf_format=standard`,
    requestInit,
  );

  const data = await response.json();
  return data[0];
};

export const getMedia = async (id: number): Promise<WP_REST_API_Attachment> => {
  const response = await fetch(`${baseUrl}media/${id}`, requestInit);

  const data = await response.json();
  return data;
};

export const getPeople = async (): Promise<{
  data: WP_REST_API_Posts;
  count: number;
}> => {
  const category = await getCategory('people');
  if (!category) return { data: [], count: 0 };

  const response = await fetch(
    `${baseUrl}posts?&categories=${category.id}&_embed`,
    requestInit,
  );

  const data = await response.json();
  const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;

  return { data, count };
};

export const getProducts = async (): Promise<{
  data: WP_REST_API_Posts;
  count: number;
}> => {
  const response = await fetch(
    `${baseUrl}product?&&_embed&acf_format=standard`,
    requestInit,
  );

  const data = await response.json();
  const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;

  return { data, count };
};

export const getJobs = async (): Promise<{
  data: WP_REST_API_Posts;
  count: number;
}> => {
  const category = await getCategory('jobs');
  if (!category) return { data: [], count: 0 };

  const response = await fetch(
    `${baseUrl}posts?&categories=${category.id}&_embed`,
    requestInit,
  );

  const data = await response.json();
  const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;

  return { data, count };
};

export const getCategory = async (
  slug: string,
): Promise<WP_REST_API_Categories[number]> => {
  const response = await fetch(
    `${baseUrl}categories?slug=${slug}`,
    requestInit,
  );

  const data = (await response.json()) as WP_REST_API_Categories;
  return data[0];
};
