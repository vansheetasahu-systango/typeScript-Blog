import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'img.freepik.com', // Domain for Freepik images
      't3.ftcdn.net',    // Domain for T3 images
      'media.istockphoto.com', // Domain for Istock images
      'encrypted-tbn0.gstatic.com', // Domain for Google images
      'lh3.googleusercontent.com', // Domain for Googleusercontent images
      "t4.ftcdn.net"
    ],
  },
};

export default nextConfig;
