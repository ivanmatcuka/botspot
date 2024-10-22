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
        hostname: 'botspot.de',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'botspot-dev-bhcb51buyb.live-website.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
