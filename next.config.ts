import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.ngrok-free.app", "*.ngrok.io"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "ngrok-skip-browser-warning", value: "true" },
        ],
      },
    ];
  },
};

export default nextConfig;
