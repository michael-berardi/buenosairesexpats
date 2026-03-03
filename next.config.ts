import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // NOTE: Redirects are handled in vercel.json since output: 'export'
  // does not support Next.js redirects() at build time.
};

export default nextConfig;
