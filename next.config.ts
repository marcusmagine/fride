import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kontakt",
        destination: "/kontakta-oss",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
