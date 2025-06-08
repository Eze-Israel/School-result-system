import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack(config) {
    // Add file-loader for pdf.worker.entry.js
    config.module.rules.push({
      test: /pdf\.worker\.entry\.js$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
