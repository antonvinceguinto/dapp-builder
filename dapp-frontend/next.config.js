/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'utils', 'src', 'src/**/*'],
  },
};

module.exports = nextConfig;
