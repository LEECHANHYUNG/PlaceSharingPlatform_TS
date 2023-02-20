/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/main/:path*',
        destination: `http://131.186.27.93:18080/main/:path*`,
      },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'officesharingplatform-image-server.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  env: {
    kakaokey: 'dc629edb6c7c6ce0791c0f11c9b5d459',
    baseURL: 'http://localhost:3000',
    serverURL: 'http://131.186.27.93:18080/',
  },
};

module.exports = nextConfig;
