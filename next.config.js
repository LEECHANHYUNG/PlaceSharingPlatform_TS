/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  env: {
    kakaokey: 'dc629edb6c7c6ce0791c0f11c9b5d459',
    baseURL:
      'https://port-0-place-sharing-platform-883524lbtbkgal.gksl2.cloudtype.app',
  },
};

module.exports = nextConfig;
