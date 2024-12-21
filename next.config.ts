import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  iimages: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
