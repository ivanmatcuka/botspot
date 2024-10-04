import type { WP_REST_API_Posts } from 'wp-types';

export const getPosts = async (
  page: number = 2,
  perPage: number = 12,
): Promise<WP_REST_API_Posts> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}posts?per_page=${perPage}&page=${page}&_embed`,
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
