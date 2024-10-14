import type { WP_REST_API_Categories, WP_REST_API_Posts } from 'wp-types';

export const getPosts = async (
  page: number = 1,
  perPage: number = 12,
): Promise<{ data: WP_REST_API_Posts; count: number }> => {
  const category = await getCategory('3d-academy');

  if (!category) return { data: [], count: 0 };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}posts?per_page=${perPage}&page=${page}&categories=${category.id}&_embed`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const data = await response.json();

  return { data, count: Number(response.headers.get('X-WP-Total')) };
};

export const getPost = async (
  id: number,
): Promise<WP_REST_API_Posts[number]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}posts?include=${id}&_embed`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const data = await response.json();
  return data[0];
};

export const getPostBySlug = async (
  slug: string,
): Promise<WP_REST_API_Posts[number]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}posts?slug=${slug}&_embed`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const data = await response.json();
  return data[0];
};

export const getPeople = async (): Promise<{
  data: WP_REST_API_Posts;
  count: number;
}> => {
  const category = await getCategory('people');

  if (!category) return { data: [], count: 0 };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}posts?&categories=${category.id}&_embed`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const data = await response.json();

  return { data, count: Number(response.headers.get('X-WP-Total')) };
};

export const getJobs = async (): Promise<{
  data: WP_REST_API_Posts;
  count: number;
}> => {
  const category = await getCategory('jobs');

  if (!category) return { data: [], count: 0 };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}posts?&categories=${category.id}&_embed`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const data = await response.json();
  return { data, count: Number(response.headers.get('X-WP-Total')) };
};

export const getCategory = async (
  slug: string,
): Promise<WP_REST_API_Categories[number]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}categories?slug=${slug}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const data = (await response.json()) as WP_REST_API_Categories;
  return data[0];
};

export const getMedia = async (id?: number): Promise<any> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}media/${id ?? ''}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await response.json();
  return data;
};
