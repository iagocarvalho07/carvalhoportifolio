import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: true,
    serverActions: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
