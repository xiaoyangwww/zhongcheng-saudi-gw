/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/sa/:path*',
        destination: 'https://zcts.daxunkeji.com/prod-api/sa/:path*',
      },
    ]
  },
}

export default nextConfig
