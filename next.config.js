/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com'],
    unoptimized: true,
  },
  swcMinify: true,
  devIndicators: {
    buildActivity: false
  }
}

module.exports = nextConfig
