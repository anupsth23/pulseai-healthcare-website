import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/pulseai-healthcare-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pulseai-healthcare-website/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
