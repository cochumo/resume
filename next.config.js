/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.REPOSITORY_NAME,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ja',
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;
