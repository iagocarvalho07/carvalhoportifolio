import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: true,
    serverActions: {
      allowedOrigins: ['localhost:3000', 'carvalho-portifolio.vercel.app']
    }
  },
  reactStrictMode: true
};

export default nextConfig;
