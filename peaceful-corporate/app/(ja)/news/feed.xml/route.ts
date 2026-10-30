import { newsData } from "@/lib/news-data";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

function toRfc822Jst(dateStr: string): string {
  // dateStr: "YYYY.MM.DD"
  const [year, month, day] = dateStr.split(".").map(Number);
  // JST midnight = UTC (year, month-1, day, 0, 0, 0) minus 9h = UTC prev day 15:00
  // Use +0900 offset directly in output
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // Build Date at JST midnight by using UTC 15:00 of the previous day
  // Actually: JST 00:00 = UTC (day-1) 15:00, but easier to compute day of week via Date
  const utcDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0) - 9 * 3600 * 1000);
  const dayOfWeek = days[utcDate.getUTCDay()];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dd = String(day).padStart(2, "0");
  const mon = months[month - 1];
  return `${dayOfWeek}, ${dd} ${mon} ${year} 00:00:00 +0900`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): NextResponse {
  const baseUrl = "https://www.peaceful-inc.com";

  const items = newsData
    .map((item) => {
      const link = `${baseUrl}/news/${item.id}`;
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${toRfc822Jst(item.date)}</pubDate>
      <description>${escapeXml(item.titleEn)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>株式会社peaceful ニュース</title>
    <link>${baseUrl}/news</link>
    <description>株式会社peacefulのニュースの一覧です。</description>
    <language>ja</language>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
