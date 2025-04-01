import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
        protocol: "https",
        port: "",
      },
      // {
      //   hostname: "lh3.googleusercontent.com",
      //   protocol: "https",
      //   port: "",
      // },
      // {
      //   hostname: "jamesclear.com",
      //   protocol: "https",
      //   port: "",
      // },
    ],
  },
};

export default nextConfig;
