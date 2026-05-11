import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect non-www to www (HTTP→HTTPS is handled by Vercel automatically)
      {
        source: "/:path*",
        has: [{ type: "host", value: "fride.se" }],
        destination: "https://www.fride.se/:path*",
        permanent: true,
      },
      {
        source: "/kontakt",
        destination: "/kontakta-oss",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
