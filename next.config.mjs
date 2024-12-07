import nextI18NextConfig from './next-i18next.config.js';
const { i18n } = nextI18NextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
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
};

export default nextConfig;
