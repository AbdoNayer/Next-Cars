/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  devIndicators: {
    buildActivity: false
  }
}

module.exports = nextConfig
