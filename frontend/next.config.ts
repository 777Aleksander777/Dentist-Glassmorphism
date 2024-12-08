import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/**"
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
