import { getAuth } from './getAuth';

const redirectsUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/redirection/v1/redirect`;

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
