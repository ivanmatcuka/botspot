import type { WP_REST_API_Posts } from 'wp-types';

export const getPosts = async (
  page: number = 1,
  perPage: number = 12,
): Promise<{ data: WP_REST_API_Posts; count: number }> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}posts?per_page=${perPage}&page=${page}&categories=2&_embed`,
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

export const getPeople = async (): Promise<{
  data: WP_REST_API_Posts;
  count: number;
}> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}posts?&categories=36&_embed`,
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