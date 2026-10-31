/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // LinkedIn などの SNS クローラーは Range: bytes=0-N でページの先頭部分だけを要求してくる。
  // Vercel CDN は ETag がある応答に対して Range 要求を 206 Partial Content で返し、
  // og:image タグの手前で切れてしまう。
  // generateEtags: false にすると Next.js が HTML ページに ETag を付けなくなり、
  // Vercel CDN が Range 要求にも 200 で全体を返すようになる。
  // 参照: https://nextjs.org/docs/app/api-reference/config/next-config-js/generateEtags
  generateEtags: false,
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
