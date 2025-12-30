import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/virginia-rcv-tracker' : '',
  assetPrefix: isProd ? '/virginia-rcv-tracker/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
