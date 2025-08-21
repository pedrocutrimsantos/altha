/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [''],
    unoptimized: true
  },
  experimental: {
    outputFileTracingRoot: undefined,
  },
}

export default nextConfig
