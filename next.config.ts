import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.naturpflege-eschenbeck.de',
          },
        ],
        destination: 'https://naturpflege-eschenbeck.de/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
