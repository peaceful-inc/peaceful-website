import { readFile } from "fs/promises"
import path from "path"

// ビルド時（force-static）に静的生成します。
// public/ の静的ファイルとして直接 Vercel CDN に渡すと ETag が付き、
// LinkedIn などの Range リクエストに対して 206 Partial Content が返ってしまいます。
// Route Handler の静的出力として Next.js に管理させることで、
// generateEtags: false の設定が適用され ETag が付かなくなります。
// ETag がなければ Vercel CDN は Range リクエストに対しても 200 で全体を返します。
// 参照: https://nextjs.org/docs/app/api-reference/config/next-config-js/generateEtags
export const dynamic = "force-static"

export async function GET() {
  const imagePath = path.join(process.cwd(), "public", "og-image.png")
  const imageData = await readFile(imagePath)

  return new Response(imageData, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  })
}
