const redirectsUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/redirection/v1/redirect`;
const authUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/simple-jwt-login/v1/auth`;

async function getAuth() {
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
}

async function getRedirects() {
  const { data: auth } = await getAuth();
  if (!auth) return { data: [], count: 0 };

  const response = await fetch(`${redirectsUrl}?JWT=${auth.jwt}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  try {
    const data = await response.json();

    return { data: data.items, count: data.total };
  } catch {
    return { data: [], count: 0 };
  }
}

function adaptRedirectsForNextJs(jsonData) {
  return jsonData.map((redirect) => {
    const { url, action_data, action_code, match_url } = redirect;
    const source = match_url.replace(/\/$/, '');

    const destination =
      action_data.url || action_data.url_from || action_data.server || url;

    return {
      source,
      destination,
      permanent: action_code === 301,
    };
  });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'botspot.live-website.com',
        port: '',
      },
    ],
  },
  async redirects() {
    const jsonData = await getRedirects();
    const nextJsRedirects = adaptRedirectsForNextJs(jsonData.data);

    return nextJsRedirects;
  },
};

export default nextConfig;
