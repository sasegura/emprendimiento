/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  distDir: 'build',
  output: 'export',
  assetPrefix: './',
};

module.exports = nextConfig;
