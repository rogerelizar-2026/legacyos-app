/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros de linting
  },
  typescript: {
    ignoreBuildErrors: true,  // Ignora erros de tipo
  },
};

module.exports = nextConfig;
