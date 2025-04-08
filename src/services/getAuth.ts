const authUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/simple-jwt-login/v1/auth`;

export const getAuth = async () => {
  const response = await fetch(authUrl, {
    method: 'POST',
    body: JSON.stringify({
      password: process.env.WORDPRESS_PASSWORD,
      username: process.env.WORDPRESS_USER,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  try {
    const data = await response.json();

    return data;
  } catch {
    return null;
  }
};
