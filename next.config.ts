import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 静的サイト生成用
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
