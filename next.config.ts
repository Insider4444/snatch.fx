import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        port: "", // Leave empty if no port is needed
        pathname: "/**", // Adjust this path as needed
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "", // Leave empty if no port is needed
        pathname: "/**", // Adjust this path as needed
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
