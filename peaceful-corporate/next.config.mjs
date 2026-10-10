/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/giga-hospital",
        destination: "/vision#giga-hospital",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
