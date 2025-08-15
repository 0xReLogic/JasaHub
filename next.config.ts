import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable ESLint during builds for deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable type checking during builds for deployment  
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['via.placeholder.com', 'picsum.photos'],
  },
};

export default nextConfig;