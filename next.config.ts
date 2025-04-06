import { getRedirects } from './src/service';

import { NextConfig } from 'next';

type JsonData = {
  url: string;
  action_code: number;
  match_url: string;
  action_data: {
    url?: string;
    url_from?: string;
    server?: string;
  };
}[];

const adaptRedirectsForNextJs = (jsonData: JsonData) =>
  jsonData.map((redirect) => {
    const { url, action_data, action_code, match_url } = redirect;
    const { url: action_url, url_from, server } = action_data;

    const source = match_url.replace(/\/$/, '');
    const destination = action_url || url_from || server || url;

    return {
      source,
      destination,
      permanent: action_code === 301,
    };
  });

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['color-functions', 'mixed-decls', 'legacy-js-api'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
      },
      {
        protocol: 'https',
        hostname: 'botspot.live-website.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'botspot.matcuka.dev',
        port: '',
      },
    ],
  },
  experimental: {
    inlineCss: true,
  },
  output: 'standalone',
  async redirects() {
    const jsonData = await getRedirects();
    const nextJsRedirects = adaptRedirectsForNextJs(jsonData.data);

    return nextJsRedirects;
  },
};

export default nextConfig;
