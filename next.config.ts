import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      // Country abbreviation redirects
      { source: '/visas/nationalities/usa/', destination: '/visas/nationalities/united-states/', permanent: true },
      { source: '/visas/nationalities/uk/', destination: '/visas/nationalities/united-kingdom/', permanent: true },
      { source: '/visas/nationalities/us/', destination: '/visas/nationalities/united-states/', permanent: true },
    ];
  },
};

export default nextConfig;
