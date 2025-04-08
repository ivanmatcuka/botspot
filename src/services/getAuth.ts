const authUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/simple-jwt-login/v1/auth`;

export const getAuth = async () => {
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
