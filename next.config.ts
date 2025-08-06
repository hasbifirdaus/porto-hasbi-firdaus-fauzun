import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["backendlessappcontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backendlessappcontent.com",
        pathname: "**",
      },
    ],
  },
};
export default nextConfig;
