import { getAuth } from './getAuth';

const redirectsUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/redirection/v1/redirect`;

export const getRedirects = async () => {
  const { data: auth } = await getAuth();
  if (!auth) return { count: 0, data: [] };

  const response = await fetch(`${redirectsUrl}?JWT=${auth.jwt}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return { count: 0, data: [] };
  }

  try {
    const data = await response.json();
    return { count: data.total, data: data.items };
  } catch {
    return { count: 0, data: [] };
  }
};
