/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // すべてのパス（/、/en、/news/[id]、/og-image.png など）に適用。
        // LinkedIn など SNS クローラーが Range リクエストを送っても
        // Vercel CDN が 206 Partial Content ではなく 200 でフル応答を返すようにする。
        // RFC 7233 §2.3: Accept-Ranges: none はサーバーが Range リクエストを受け付けない旨の宣言。
        source: "/:path*",
        headers: [{ key: "Accept-Ranges", value: "none" }],
      },
    ]
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
